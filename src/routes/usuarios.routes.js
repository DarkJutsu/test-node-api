import { Router } from "express";
import {
  createUsuario,
  deleteUsuario,
  getUsuarioById,
  getUsuarios,
  updateUsuario,
} from "../controllers/usuarios.controller.js";

const routerUsuarios = Router();

routerUsuarios.get("/usuarios", getUsuarios);
routerUsuarios.get("/usuario/:id", getUsuarioById);
routerUsuarios.post("/usuarios", createUsuario);
routerUsuarios.put("/usuario/:id", updateUsuario);
routerUsuarios.delete("/usuario/:id", deleteUsuario);

export default routerUsuarios;
