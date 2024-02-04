import userModel from "../Models/userModels.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import placeModel from "../Models/placeModel.js";
import perksModel from "../Models/perksModel.js";

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
    const newUser = await userModel.create({
      name,
      email,
      password: hashedpassword,
    });
    delete newUser.password;
    const token = createToken(newUser._id);
    res
      .cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        maxAge: new Date(Date.now() + 3 * 1000 * 24 * 60 * 60),
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
      .cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: new Date(Date.now() + 3 * 1000 * 24 * 60 * 60),
      })
      .status(200)
      .json({ message: "user loggedIn successfully !!" });
  } catch (error) {
    res.status(500).json(error);
  }
};


export const registerPlace = async (req, res) => {
  try {
    const { title, address, link, photos, description,
      perks, extraInfo, checkIn, checkOut, maxGuests, price } = req.body.data;
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, process.env.EXCESS_TOKEN, async (error, decoded) => {
        if (error) {
          console.log(error.message);
          return;
        } else {
          const newPlace = await placeModel.create({
            owner: decoded.id,
            title,
            address,
            photos,
            description,
            extraInfo,
            checkIn,
            checkOut,
            maxGuests,
            price
          });
          const { wifi, park, tv, radio, pet, entrance } = perks;
          const perksFor_NewPlace = await perksModel.create({
            placeId: newPlace._id,
            wifi,
            park,
            tv,
            radio,
            pet,
            entrance
          })
          res.status(200).json({ message: "Place added successfully !!" });
        }
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


export const getPlaces = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, process.env.EXCESS_TOKEN, async (error, decoded) => {
        if (error) {
          console.log(error.message);
          return;
        } else {
          const allPlaces = await placeModel.find({ owner: decoded.id })
          res.status(200).json(allPlaces);
        }
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getPlacesById = async (req, res) => {
  try {
    const { id } = req.params;
    const placeData = await placeModel.findById(id);
    const perksData = await perksModel.findOne({ placeId: placeData._id })
    res.status(200).json({ placeData: placeData, perksData: perksData });
  } catch (error) {
    res.status(500).json(error);
  }
};


export const updatePlace = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    const data = req.body;
    const { id } = req.params;
    const { title, address, photos, description, perks,
      extraInfo, checkIn, checkOut, maxGuests } = data;
    const { wifi, park, tv, radio, pet, entrance } = perks;
    if (token) {
      jwt.verify(token, process.env.EXCESS_TOKEN, async (error, decoded) => {
        if (error) {
          console.log(error.message);
          return;
        } else {
          const placeToUpdate = await placeModel.findById(id);
          const perksToUpdate = await perksModel.findOne({ placeId: placeToUpdate._id });
          if (!(decoded.id == placeToUpdate.owner.toString())) {
            console.log("Not a VAlid User ");
            throw Error;
          }
          placeToUpdate.set({
            title, address, photos, description,
            extraInfo, checkIn, checkOut, maxGuests
          });
          await placeToUpdate.save();
          perksToUpdate.set({
            wifi, park, tv, radio, pet, entrance
          });
          await perksToUpdate.save();
        }
      });
    }
    res.status(201).json("Place updated Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletePlace = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
  } catch (error) {
    res.status(500).json(error);
  }
};