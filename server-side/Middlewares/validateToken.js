import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userModel from "../Models/userModels";

dotenv.config();

export const checkCurrentUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.EXCESS_TOKEN, async (error, decoded) => {
      if (error) {
        console.log(error.message);
      } else {
        try {
          const currentUser = await userModel.findOne(decoded.id);
          res.json({ currentUser });
        } catch (error) {
          res.status(500).json({ message: "Server error" });
        }
      }
    });
  }
};
