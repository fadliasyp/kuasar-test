import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { validate } from "../validation/validation.js";
import { registerValidation, loginValidation, updateUserValidation } from "../validation/user-validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { v4 as uuid } from "uuid";
import path from "path";
import { fileURLToPath } from 'url';
import { request } from "http";

// Dapatkan path direktori saat ini
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const register = async (request) => {

  const {body, files} = request

    const user = validate(registerValidation, body);
  
     // Validasi jika file avatar tidak ada
  if (!files || !files.avatar) {
    throw new ResponseError(400, "Avatar file is required");
  }

  const avatar = files.avatar;

  // Validasi ukuran file atau tipe file jika diperlukan
  if (!avatar.mimetype.startsWith("image/")) {
    throw new ResponseError(400, "Avatar must be an image file");
  }

    // cek jumlah user dengan email tertentu
    const totalUser = await prismaClient.user.count({
      where: {
        email: user.email,
      },
    });

      // Simpan file ke folder uploads
  const avatarName = `${Date.now()}-${avatar.name}`;
  const uploadPath = path.join(__dirname, "../uploads", avatarName);
  await avatar.mv(uploadPath);
  
    if (totalUser === 1) {
      throw new ResponseError(400, "Email already exists");
    } else if (user.password.length < 5) {
      throw new ResponseError(400, "Password too short");
    } else if (user.password.length > 25) {
      throw new ResponseError(400, "Password too long");
    }
  
    // hashing password
    user.password = await bcrypt.hash(user.password, 12);
  
    // send record baru ke table user
    const userCreated = await prismaClient.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
        avatar: `/uploads/${avatarName}`,
        phone: user.phone,
        adress: user.adress,
      },
      select: {
        email: true,
        name:true,
        avatar: true,
        phone: true,
        adress: true
      },
    });

    console.log("Avatar path:", uploadPath);


    return userCreated;
};

const login = async (request) => {
    const user = validate(loginValidation, request);
  
    const checkUser = await prismaClient.user.findFirst({
      where: {
        email: user.email,
      },
    });
  
    try {
      if (!checkUser) {
        throw new ResponseError(401, "Email not found");
      }
      const checkPassword = await bcrypt.compare(
        user.password,
        checkUser.password
      );
      if (!checkPassword) {
        throw new ResponseError(401, "Password not match");
      }
  
      const payload = {
        email: checkUser.email,
      };
  
      // membuat token dengan jwt
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      // masukan token ke user
      await prismaClient.user.update({
        where: {
          id_user: checkUser.id_user,
        },
        data: {
          token: token,
        },
      });
  
      return { token };
    } catch (error) {
      throw new ResponseError(500, error.message);
    }
  };

  const logout = async (request) => {
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
  
    // update token user logout menjadi null
    // await prismaClient.user.update({
    //   where: {
    //     id_user: user.id_user,
    //   },
    //   data: {
    //     token: null,
    //   },
    // });

    return await prismaClient.user.delete({
      where: {
        id_user: user.id_user
      },
    })
    // return user.email;
  };

  const getAll = async (request) => {
    const users = await prismaClient.user.findMany({
      where: {},
      include: {
        task: true,
      }
    })

    return {
      users
    }
  }

const editByIdService = async (request, params, authorization) => {
  const user = validate(updateUserValidation, request)
  const {id} = params

  const token = authorization.split(" ")[1];

  const user2 = await prismaClient.user.findFirstOrThrow({
    where: {
      token: token,
    },
  });

  if (!user2) {
    throw new ResponseError(404, "User not found");
  }

  const updateData = {user: {}}

  if(user.email){
    updateData.user.email = user.email
  }
  if(user.name){
    updateData.user.name = user.name
  }
  if(user.phone){
    updateData.user.phone = user.phone
  }
  if(user.adress){
    updateData.user.adress = user.adress
  }

  const result = prismaClient.user.update({
    where: {
      id_user: parseInt(id)
    },
    data: {
      email: updateData.user.email,
      name: updateData.user.name,
      phone: updateData.user.phone,
      adress: updateData.user.adress
    },
    select: {
      id_user: true,
      email: true,
      name: true,
      avatar: true,
      phone: true,
      adress: true
    }
  })
  return result;
}

  export default {
  register,
  login,
  logout,
  getAll,
  editByIdService
};
  