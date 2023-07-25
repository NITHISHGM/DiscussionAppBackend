const express = require("express");
const router = express.Router();
const {
  createDiscussion,
  getAllDiscussion,
  getSingleDiscussion,
} = require("../controller/discussionController");

router.route("/").get(getAllDiscussion).post(createDiscussion);
router.get("/:discussionId", getSingleDiscussion);

module.exports = router;
