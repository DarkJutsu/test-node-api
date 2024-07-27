import { pool } from "../db.js";

export const registerUser = async (req, res) => {
  try {
    const data = req.body;
    const { rows } = await pool.query(
      "INSERT INTO users(user_name, password) VALUES($1, $2) RETURNING *",
      [data.user, data.password]
    );
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error!!!" });
  }
};
