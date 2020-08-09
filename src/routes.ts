import UserController from "@controllers/UsersController";
import express from "express";

const routes = express.Router();
const userControllers = new UserController();

routes.get("/", userControllers.teste);

export default routes;
