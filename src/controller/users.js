const userMoodel = require("../models/users");

//GET (READ)
const getAllusers = async (req, res) => {
  try {
    const [data] = await userMoodel.getAllusers();
    res.json({
      message: "GET all users sucsess ",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server erorr",
      serverMessage: error,
    });
  }
};

//POST (CREATE)
const creatNewUser = async (req, res) => {
  try {
    const { body } = req;
    await userMoodel.creatNewUser(body);
    res.status(201).json({
      message: "CREATE new users sucsess ",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server erorr",
      serverMessage: error,
    });
  }
};

//PATCH  (UPDATE)
const updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await userMoodel.updateUsers(body, id);
    res.status(201).json({
      message: "CREATE new users sucsess ",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "server erorr",
      serverMessage: error,
    });
  }
};

//DELETE (HAPUS)
const deleteUsers = async (req, res) => {
  const { id } = req.params;
  try {
    await userMoodel.deleteUsers(id);
    res.json({
      message: "DELETE user sukses",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "server erorr",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllusers,
  creatNewUser,
  updateUsers,
  deleteUsers,
};
