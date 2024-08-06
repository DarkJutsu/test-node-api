import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config.js";
import routerUsuarios from "./routes/usuarios.routes.js";
import routerUsers from "./routes/users.routes.js";
import routerAuth from "./routes/auth.routes.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser())

app.use(routerUsuarios);
app.use(routerUsers);
app.use(routerAuth);

app.listen(PORT, () => {
  console.log("Server on port", PORT);
});
