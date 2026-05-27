require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ added
const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(cors()); // ✅ VERY IMPORTANT for frontend connection
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});