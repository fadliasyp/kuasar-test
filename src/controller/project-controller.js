import projectService from "../service/project-service.js";

const createProject = async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      const result = await projectService.createProject(req.body, authorization);
      res.status(200).json({
        status: "success",
        data: result,
        message: "Data berhasil ditambahkan"
      });
    } catch (error) {
      next(error);
    }
  };

  const getAll = async (req, res, next) => {
    try {
      const data = await projectService.getAll();
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
      const data = await projectService.editByIdProject(
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
  
  const deleteById = async (req, res, next) =>{
    const params = req.params;
    console.log("Params:", params);

    try {
      const data = await projectService.deleteProject(req, { id: req.params.id })
      res.status(200).json({
        data: data,
        message: "Data berhasil di hapus"
      });
    } catch (error) {
      next(error)
    }
  }

  export default{
    createProject,
    getAll,
    editById,
    deleteById
  }