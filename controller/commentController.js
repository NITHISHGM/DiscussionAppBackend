const Comment = require("../modal/comment");

const addComment = async (req, res) => {
  const { discussionId, content } = req.body;
  try {
    if (!discussionId || !content) {
      res.status(500).json({
        err: "Manditory field is missing..",
      });
    }
    let addCommentToId = await Comment.create({
      discussionId,
      content,
    });
    res.status(200).json(addCommentToId);
  } catch (error) {
    res.status(500).json({
      error: "Failed to update comment",
    });
  }
};

const getCommentsForSpecificId = async (req, res) => {
  try {
    let getCommentForSpecificId = await Comment.find({
      discussionId: req.params.discussionId,
    });
    res.status(200).json(getCommentForSpecificId);
  } catch (error) {
    res.status(500).json({
      error: "Failed to update comment",
    });
  }
};

module.exports = { addComment, getCommentsForSpecificId };
