require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRouter = require("./Routers/UserRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bright Valley College Backend is Running!");
});

app.use("/api/users", userRouter);

const PORT = process.env.PORT || 5000;

if (!process.env.MONGO_URL) {
  console.error("MONGO_URL is missing. Create a .env file in the backend folder.");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });