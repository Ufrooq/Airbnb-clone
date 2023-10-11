import express from "express";
import userRoutes from "./Routes/userRoutes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
