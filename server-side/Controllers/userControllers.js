import userModel from "../Models/userModels.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) {
      res.status(409).json({ message: "username already used" });
    }
    const salt = await bcrypt.genSalt();
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = await userModel.create({
      name,
      email,
      password: hashedpassword,
    });

    res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
