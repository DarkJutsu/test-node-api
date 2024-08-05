import { Validations } from "../utils/Validations.js";
import { getUserByUsername } from "./users.controller.js";
import bcrypt from "bcrypt";

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

    return res.json(publicUser);
  } catch (err) {
    if (err.message === "User not found")
      return res.status(404).json({ message: err.message });
    if (err.message === "Password is invalid!!!")
      return res.status(409).json({ message: err.message });
    return res.status(500).json({ message: err.message });
  }
};
