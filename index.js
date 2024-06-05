const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const ConnectDB = require("./config/db");
const { readdirSync } = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// connect db
ConnectDB();

// Define route handler for the root domain
app.get("/", (req, res) => {
  res.send("Welcome to the root domain!");
});

app.get("/api/get", (req, res) => {
  res.send("Server is working!");
});

// Dynamically load all routes from the routes folder
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
