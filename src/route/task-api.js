import express from "express";
import taskCntlr from "../controller/task-controller.js"
import authMiddleware from "../middleware/auth-middleware.js";

const taskRoute = new express.Router();
taskRoute.post("/task", authMiddleware, taskCntlr.uploadTask)
taskRoute.get("/task",  taskCntlr.getAll)
taskRoute.put("/task/:id",  authMiddleware,taskCntlr.editByAssigned)
taskRoute.delete("/task/",  authMiddleware,taskCntlr.deleteTask)

export {taskRoute}