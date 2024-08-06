import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Validations } from "../utils/Validations.js";
import { getUserByUsername } from "./users.controller.js";
import { SECRET_JWT_KEY } from "../config.js";

export const login = async (req, res) => {
  try {
    const { user, password } = req.body;
    Validations.username(user);
    Validations.password(password);

    const getUser = await getUserByUsername(user);

    const isValid = bcrypt.compareSync(password, getUser.password);
    if (!isValid) throw new Error("Password is invalid!!!");

    const publicUser = {
      id: getUser.id,
      username: getUser.user_name,
    };

    const token = jwt.sign(publicUser, SECRET_JWT_KEY, { expiresIn: "1h" });

    return res.json({ publicUser, token });
  } catch (err) {
    if (err.message === "User not found")
      return res.status(404).json({ message: err.message });
    if (err.message === "Password is invalid!!!")
      return res.status(409).json({ message: err.message });
    return res.status(500).json({ message: err.message });
  }
};
