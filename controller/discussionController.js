const Discussion = require("../modal/discussion");

const createDiscussion = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(500).json({
        error: "Please add all the fields",
      });
    } else {
      let createNewDiscussion = await Discussion.create({ title, content });
      res.status(201).json(createNewDiscussion);
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to create discussions",
      stack: error,
    });
  }
};

const getAllDiscussion = async (req, res) => {
  try {
    let getAllDiscussions = await Discussion.find();
    res.status(200).json(getAllDiscussions);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch discussions",
    });
  }
};

const getSingleDiscussion = async (req, res) => {
  try {
    let getDiscussionBasedonId = await Discussion.findById(
      req.params.discussionId
    );
    res.status(200).json(getDiscussionBasedonId);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch discussions",
    });
  }
};

module.exports = { createDiscussion, getAllDiscussion, getSingleDiscussion };
