import userModel from "../Models/userModels.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

function createToken(id) {
  return jwt.sign({ id }, process.env.EXCESS_TOKEN, {
    expiresIn: 60 * 60 * 24 * 3,
  });
}

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) {
      res.status(409).json({ message: "username already used" });
    }
    const salt = await bcrypt.genSalt();
    const hashedpassword = await bcrypt.hash(password, salt);
    console.log(name, email, password);
    const newUser = await userModel.create({
      name,
      email,
      password: hashedpassword,
    });
    delete newUser.password;
    const token = createToken(newUser._id);
    res
      .cookie("jwtToken", token, {
        httpOnly: true,
        secure: true,
        maxAge: new Date(Date.now() + 1 * 1000 * 24 * 60 * 60),
      })
      .status(200)
      .json({ message: "user created successfully !!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      throw Error("Incorrect email!");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw Error("Incorrect Password!");
    }
    const token = createToken(user._id);
    res
      .cookie("jwtToken", token, {
        httpOnly: true,
        secure: true,
        maxAge: new Date(Date.now() + 3 * 1000 * 24 * 60 * 60),
      })
      .status(200)
      .json({ message: "user loggedIn successfully !!" });
  } catch (error) {
    res.status(500).json(error);
  }
};
