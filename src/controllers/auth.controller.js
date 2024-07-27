import { Validations } from "../utils/Validations.js";
import { getUserByUsername } from "./users.controller.js";

export const login = async (req, res) => {
  try {
    const data = req.body;
    Validations.username(data.user);
    Validations.password(data.password);

    const user = await getUserByUsername(data.user);
    return res.json(user);
  } catch (err) {
    return res.send(err.message);
  }
};
