import express from "express";
import userRoutes from "./Routes/userRoutes.js";
import placeRoutes from "./Routes/placeRoutes.js";
import bookingRoutes from "./Routes/bookingRoutes.js";
import cors from "cors";
import { dbCon } from "./Connections/connectDb.js";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";


const app = express();
const port = process.env.PORT || 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// settingUp middlewares --->
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// setting main routes --->
app.use("/Uploads", express.static(__dirname + "/Uploads"));
app.use("/users", userRoutes);
app.use("/places", placeRoutes);
app.use("/booking", bookingRoutes);

// dbconnection --->
dbCon();

// listening to the server --->
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
