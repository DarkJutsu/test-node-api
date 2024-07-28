import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const routerAuth = Router();

routerAuth.get("/", (req, res) => {
  res.render("index", { username: "Samllo 95" });
});
routerAuth.post("/login", login);

export default routerAuth;
