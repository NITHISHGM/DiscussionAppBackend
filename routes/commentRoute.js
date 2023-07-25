const express = require("express");
const router = express.Router();

const {
  addComment,
  getCommentsForSpecificId,
} = require("../controller/commentController");

router.get("/:discussionId", getCommentsForSpecificId);
router.post("/", addComment);

module.exports = router;
