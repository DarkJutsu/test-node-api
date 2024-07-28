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
    return res.send(err.message);
  }
};
