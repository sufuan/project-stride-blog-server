const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

// Controllers
const {
  createpost,
  readpost,
  updatepost,
  deletepost,
  getAllPosts,
  getPostById,
} = require("../controller/blog.controller");

router.route("/createpost").post(createpost);
router.route("/readpost/:userId").get(readpost);
// router.route("/readpost/:id").get(readpost);
router.route("/updatepost/:id").put(updatepost);
router.route("/deletepost/:id").delete(deletepost);
router.get("/posts", getAllPosts);
router.get("/posts/:id", getPostById);

module.exports = router;
