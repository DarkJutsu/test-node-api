import { Router } from "express";
import jwt from "jsonwebtoken";
import { login } from "../controllers/auth.controller.js";
import { createUser } from "../controllers/users.controller.js";
import { SECRET_JWT_KEY } from "../config.js";

const routerAuth = Router();

routerAuth.get("/", (req, res) => {
  const token = req.cookies.access_token;

  try {
    const data = jwt.verify(token, SECRET_JWT_KEY);
    res.render("index", data);
  } catch (err) {
    res.render("index");
  }
});
routerAuth.post("/login", login);
routerAuth.post("/register", createUser);
routerAuth.get("/protected", (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(403).send("Access not authorized!!!");
  }

  try {
    const data = jwt.verify(token, SECRET_JWT_KEY);
    res.render("protected", data);
  } catch (err) {
    return res.status(401).send("Access not authorized!!!");
  }
});

export default routerAuth;
