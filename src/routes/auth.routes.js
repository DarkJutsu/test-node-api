import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { createUser } from "../controllers/users.controller.js";

const routerAuth = Router();

routerAuth.get("/", (req, res) => {
  res.render("index");
});
routerAuth.post("/login", login);
routerAuth.post("/register", createUser);
routerAuth.get("/protected", (req, res) => {
  res.render("protected");
});

export default routerAuth;
