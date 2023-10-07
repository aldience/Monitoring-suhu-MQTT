const express = require("express");
const userController = require("../controller/users");
const routes = express.Router();

routes.post("/", userController.creatNewUser); //CREATE = POST
routes.get("/", userController.getAllusers); //READE = GET
routes.patch("/:id", userController.updateUsers); //UPDATE = PATCH
routes.delete("/:id", userController.deleteUsers); //DELETE = DELETE
module.exports = routes;
