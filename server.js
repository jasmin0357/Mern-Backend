const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./Routers/UserRouter");
const enquiryRouter = require("./Routers/EnquiryRouter"); // <--- 1. INGA IMPORT

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/enquiry", enquiryRouter); // <--- 2. INGA ROUTE CONNECT

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});