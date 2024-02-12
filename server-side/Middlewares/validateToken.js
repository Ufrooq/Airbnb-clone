import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userModel from "../Models/userModels.js";

dotenv.config();

export const validateToken = async () => {
  try {
    let token = req.cookies.jwt;
    console.log(token);
    if (token) {
      jwt.verify(token, process.env.EXCESS_TOKEN, async (error, decoded) => {
        if (error) {
          throw Error("Tokken is expired !!");
        }
        req.user = decoded.id;

        next();
      });
    } else {
      throw Error("Token Missing !!");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const checkCurrentUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.EXCESS_TOKEN, async (error, decoded) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        try {
          const currentUser = await userModel.findById(decoded.id);
          res.json({ currentUser });
        } catch (error) {
          res.status(500).json({ message: "Server error" });
        }
      }
    });
  } else {
    next();
  }
};
