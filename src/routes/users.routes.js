import { Router } from "express";
import {
  createUser,
  getUserById,
  getUsers,
} from "../controllers/users.controller.js";

const routerUsers = Router();

routerUsers.get("/users", getUsers);
routerUsers.get("/users/:id", getUserById);
routerUsers.post("/register", createUser);
routerUsers.post("/login", (req, res) => {
  res.json({ message: "Login" });
});

export default routerUsers;
