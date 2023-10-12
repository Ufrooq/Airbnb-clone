import { userModel } from "../Models/userModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) {
      res.status(409).json({ message: "username already used" });
    }
    res.status(200).json("okokkokokok");
  } catch (error) {
    res.status(500).json(error);
  }
};
