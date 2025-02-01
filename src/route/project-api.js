import express from "express";
import projectCntrl from "../controller/project-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";

const projectRoute = new express.Router();
projectRoute.post('/project', authMiddleware, projectCntrl.createProject)
projectRoute.get('/project', projectCntrl.getAll)
projectRoute.put('/project/:id', projectCntrl.editById)
projectRoute.delete('/project/:id', projectCntrl.deleteById)

export {projectRoute}