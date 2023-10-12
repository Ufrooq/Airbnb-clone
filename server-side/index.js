import express from "express";
import userRoutes from "./Routes/userRoutes.js";
import cors from "cors";
import { dbCon } from "./Connections/connectDb.js";

const app = express();
const port = process.env.PORT || 8000;
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use("/users", userRoutes);

// dbconnection --->
dbCon();

// listening to the server --->
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
