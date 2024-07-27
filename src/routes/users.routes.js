import { Router } from "express";
import { registerUser } from "../controllers/users.controller.js";

const routerUsers = Router();

routerUsers.post("/register", registerUser);
routerUsers.post("/login", (req, res) => {
  res.json({ message: "Login" });
});

export default routerUsers;
