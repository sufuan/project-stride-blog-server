const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Import the User model if not already imported

exports.createUser = async (req, res) => {
  try {
    const { email, name } = req.body;
    console.log(req.body);

    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      // If user exists, return an error
      return res.status(200).json({ message: "User already exists" });
    }

    // If user does not exist, create a new user
    user = new User({ email, name });
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user" });
  }
};

// Controller to get user info
exports.getuserInfo = async (req, res) => {
  try {
    const email = req.params.email;

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // If user does not exist
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user", error });
  }
};

// Controller to update user info
exports.updateuserInfo = async (req, res) => {
  try {
    const email = req.params.email;
    const updatedData = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user with the new data
    await User.updateOne({ email }, { $set: updatedData });

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};
