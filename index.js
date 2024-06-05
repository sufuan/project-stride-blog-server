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

app.get("/api/get", (req, res) => {
  res.send("Server is working!");
});

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
