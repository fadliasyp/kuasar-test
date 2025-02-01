import taskService from "../service/task-service.js"

const uploadTask = async (req, res, next) => {
    const body = req.body;
    const {authorization} = req.headers;
    try {
        const data = await taskService.createTask(body, authorization)
        res.status(200).json({
            data: data,
            message: "Data berhasil ditambahkan"
        })
    } catch (error) {
        next(error)
    }
}

const getAll = async (req, res, next) => {
    try {
        const data = await taskService.getAll();
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

const editByAssigned = async(req, res, next) => {
    const params = req.params;
    const body = req.body;
    const {authorization} = req.headers
    try {
        const data = await taskService.editByAssigned(body, params, authorization)
        res.status(200).json({
            data: data,
            message: "Data berhasil diubah",
          });
    } catch (error) {
        next(error)
    }
}

const deleteTask = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await taskService.deleteTask(authorization);
    // menghapus cookie "token"
    res.clearCookie("token");

    res.status(200).json({
      data: result,
      message: "Task sukses di hapus",
    });
  } catch (e) {
    console.log(e.message);
  }
  next();
};

export default{
    uploadTask,
    getAll,
    editByAssigned,
    deleteTask
}