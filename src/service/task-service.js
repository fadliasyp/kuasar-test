import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { validate } from "../validation/validation.js";
import { createValidation } from "../validation/task-validation.js";
import { request } from "express";

const createTask = async (request, authorization) => {
    const task = validate(createValidation, request);
  
    // Ambil token dari header Authorization
    const token = authorization.split(" ")[1];
  
    // Cari user berdasarkan token
    const userTask = await prismaClient.user.findFirstOrThrow({
      where: {
        token: token,
      },
    });
  
    // Validasi apakah user ditemukan
    if (!userTask) {
      throw new ResponseError(404, "Token invalid");
    }
  
    // ID user untuk relasi
    const idAssignedTo = userTask.id_user;

    const projectId = request.projectId; // Misalnya ID project datang dari request body atau query string


    const projectTask = await prismaClient.project.findFirstOrThrow({
      where: {
        id_project: projectId
      }
    })
  
    // Buat task dengan foreign key assignedTo
    const newTask = await prismaClient.task.create({
      data: {
        title: task.title,
        description: task.description,
        assignedTo: idAssignedTo, // Foreign key
        projectId: projectTask.id_project
      },
      include: {
        user: true, // Sertakan relasi ke user jika ingin diambil langsung
        project: true
      },
    });
  
    return newTask; // Response task dengan user yang terkait
  };
  
const getAll = async (request) => {
  const task = await prismaClient.task.findMany({
    where: {},
    include:{
      user: true,
      project: true
    }
  })

  return task
}

const editByAssigned = async (request, params, authorization) => {
  const task = validate(createValidation, request);
  const {id} = params;

  const token = authorization.split(" ")[1];

  const userTask = await prismaClient.user.findFirstOrThrow({
    where: {
      token: token
    }
  })
  if (!userTask) {
    throw new ResponseError(404, "token invalid");
  }
  const task2 = await prismaClient.task.update({
    where : {
      assignedTo: parseInt(id)
    },
    data: {
      title: task.title,
      description: task.description
    },
    include: {
      user: true,
      project: true
    }
  })
  return task2
} 

const deleteTask = async (request) => {
  const authorization = request;
  const token = authorization.split(" ")[1];
  const user = await prismaClient.user.findFirstOrThrow({
    where: {
      token: token,
    },
  });

  if (!user) {
    throw new ResponseError(401, "User not found");
  }
  return await prismaClient.task.delete({
    where: {
      assignedTo: user.id_user
    }
  })
}

export default{
    createTask,
    getAll,
    editByAssigned,
    deleteTask
}
    