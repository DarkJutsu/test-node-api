import { Router } from "express";
import {
  createUser,
  getUserById,
  getUsers,
} from "../controllers/users.controller.js";

const routerUsers = Router();

routerUsers.get("/users", getUsers);
routerUsers.get("/user/:id", getUserById);
routerUsers.post("/register", createUser);

export default routerUsers;
