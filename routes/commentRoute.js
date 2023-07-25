const express = require("express");
const router = express.Router();

const {
  addComment,
  getCommentsForSpecificId,
} = require("../controller/commentController");
const { auth } = require("../middleware/auth");

router.get("/:discussionId", auth, getCommentsForSpecificId);
router.post("/", auth, addComment);

module.exports = router;
