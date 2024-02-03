import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import BookingModel from "../Models/bookingModel.js";

dotenv.config();

export const bookPlace = async (req, res) => {
    const { data, placeId, price } = req.body;
    try {
        const token = req.cookies.jwt;
        if (token) {
            jwt.verify(token, process.env.EXCESS_TOKEN, async (error, decoded) => {
                if (error) {
                    console.log(error.message);
                    return;
                } else {
                    const placeBooked = await BookingModel.create({
                        placeId,
                        user: decoded.id,
                        checkIn: data.checkIn,
                        checkOut: data.checkOut,
                        name: data.fullname,
                        phone: data.phone,
                        price: price,
                    });
                    res.status(200).json(placeBooked);
                }
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


export const getBookings = async (req, res) => {
    try {
        const token = req.cookies.jwt;
        if (token) {
            jwt.verify(token, process.env.EXCESS_TOKEN, async (error, decoded) => {
                if (error) {
                    console.log(error.message);
                    return;
                } else {
                    const myBookings = await BookingModel.find({ user: decoded.id }).populate("placeId");
                    res.status(200).json(myBookings);
                }
            });
        }
    } catch (error) {
        console.log("assas")
        res.status(500).json(error);
    }
};