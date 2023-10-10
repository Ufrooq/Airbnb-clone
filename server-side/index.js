import express from "express";
const app = express();
const port = process.env.PORT || 8000;

app.use("/", (req, res) => {
  res.send("my name is umar farooq");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
