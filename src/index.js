import express, { json } from "express";
import { PORT } from "./config.js";
import routerUsuarios from "./routes/usuarios.routes.js";
import routerUsers from "./routes/users.routes.js";

const app = express();

app.use(express.json());
app.use(routerUsuarios);
app.use(routerUsers);

app.listen(PORT, () => {
  console.log("Server on port", PORT);
});
