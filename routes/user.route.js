const express = require("express");
const router = express.Router();

// Controller
const {
  createUser,
  getuserInfo,
  updateuserInfo,
} = require("../controller/user.contorller");
const verifyToken = require("../middleware/verifyToken");

// Route to create a user
router.post("/users/register", createUser);
router.get("/users/:email", getuserInfo);
router.put("/users/:email", updateuserInfo);

module.exports = router;
