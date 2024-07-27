import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../config.js";
import { pool } from "../db.js";
import { Validations } from "../utils/Validations.js";

export const getUsers = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM users");
  return res.json(rows);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query("SELECT * FROM users WHERE id=$1", [id]);

  if (rows.length === 0)
    return res.status(404).json({ message: "User not found" });

  return res.status(200).json(rows[0]);
};

export const getUserByUsername = async (user) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE user_name=$1", [
    user,
  ]);

  if (rows.length === 0) return { message: "User not found" };

  return rows[0];
};

export const createUser = async (req, res) => {
  try {
    const data = req.body;
    Validations.username(data.user);
    Validations.password(data.password);

    const hashedPass = await bcrypt.hash(data.password, SALT_ROUNDS);

    const { rows } = await pool.query(
      "INSERT INTO users(user_name, password) VALUES($1, $2) RETURNING *",
      [data.user, hashedPass]
    );

    return res.json(rows[0]);
  } catch (err) {
    const { detail, code, severity } = err;
    if (code === "23505") {
      return res
        .status(409)
        .json({ code: severity + " " + code, detail: detail });
    }
    return res.status(500).json({ message: "Internal server error!!!" });
  }
};
