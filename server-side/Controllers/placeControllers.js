import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import placeModel from "../Models/placeModel.js";
import userModel from "../Models/userModels.js";

dotenv.config();


export const getAllPlaces = async (req, res) => {
    try {
        const token = req.cookies.jwt;
        if (token) {
            jwt.verify(token, process.env.EXCESS_TOKEN, async (error, decoded) => {
                if (error) {
                    console.log(error.message);
                    return;
                } else {
                    const allPlaces = await placeModel.find();
                    res.status(200).json(allPlaces);
                }
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const placeHost = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = await userModel.findById(id);
        res.status(200).json(name);
    } catch (error) {
        res.status(500).json(error);
    }
};