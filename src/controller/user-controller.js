import userService from "../service/user-service.js";
import { prismaClient } from "../application/database.js";
import jwt from "jsonwebtoken";

const register = async (req, res, next) => {
  try {
    const result = await userService.register(req);
    res.status(200).json({
      data: result,
      message: "Register success",
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  // console.log(req.sessionID);
  try {
    const { token } = await userService.login(req.body);

    // menghapus cookie
    res.clearCookie("token");
    // membuat cookie
    res.cookie("token", token, {
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000, // 1 hari
    });

    // mengakses paylod dari token yang ter decode melalui req.user
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    return res.status(200).json({
      message: `Login success`,
      token,
    });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await userService.logout(authorization);
    // menghapus cookie "token"
    res.clearCookie("token");

    res.status(200).json({
      data: result,
      message: "Logout success",
    });
  } catch (e) {
    console.log(e.message);
  }
  next();
};

const getAll = async (req, res, next) => {
  try {
    const data = await userService.getAll();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const editById = async (req, res, next) => {
  const params = req.params;
  const body = req.body;
  const {authorization} = req.headers;

  try{
    const data = await userService.editByIdService(
      body,
      params,
      authorization,
    );
    res.status(200).json({
      data: data,
      message: "Data berhasil diubah"
    });
  } catch(error){
    next(error)
  }
};


export default {
  register,
  login,
  logout,
  getAll,
  editById
};
