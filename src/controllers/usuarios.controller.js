import { pool } from "../db.js";

export const getUsuarios = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM usuarios");
  return res.json(rows);
};

export const getUsuarioById = async (req, res) => {
  const { id } = req.params;

  const { rows } = await pool.query("SELECT * FROM usuarios WHERE id=$1", [id]);

  if (rows.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.json(rows[0]);
};

export const createUsuario = async (req, res) => {
  try {
    const data = req.body;
    const { rows } = await pool.query(
      "INSERT INTO usuarios(name, email) VALUES($1, $2) RETURNING *",
      [data.name, data.email]
    );
    return res.json(rows[0]);
  } catch (er) {
    const { detail, code, severity } = er;
    if (code === "23505") {
      return res
        .status(409)
        .json({ code: severity + " " + code, detail: detail });
    }
    return res.status(500).json({ message: "Internal server error!!!" });
  }
};

export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const { rows } = await pool.query(
    "UPDATE usuarios SET name=$1, email=$2 WHERE id=$3 RETURNING *",
    [data.name, data.email, id]
  );

  return res.json(rows[0]);
};

export const deleteUsuario = async (req, res) => {
  const { id } = req.params;

  const { rowCount } = await pool.query(
    "DELETE FROM usuarios WHERE id=$1 RETURNING *",
    [id]
  );

  if (rowCount === 0) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.sendStatus(204);
};
