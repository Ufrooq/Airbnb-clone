import express from "express";
import userRoutes from "./Routes/userRoutes.js";
import cors from "cors";
import { dbCon } from "./Connections/connectDb.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/", userRoutes);

// dbconnection --->
dbCon();

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
