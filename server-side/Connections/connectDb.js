import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbCon = async () => {
  try {
    const conc = await mongoose.connect(process.env.DB_URL);
    console.log("db connected successfully --->");
  } catch (error) {
    console.log(error);
  }
};
