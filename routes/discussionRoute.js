const express = require("express");
const router = express.Router();
const {
  createDiscussion,
  getAllDiscussion,
  getSingleDiscussion,
} = require("../controller/discussionController");
const { auth } = require("../middleware/auth");

router.route("/").get(auth, getAllDiscussion).post(auth, createDiscussion);
router.get("/:discussionId", auth, getSingleDiscussion);

module.exports = router;
