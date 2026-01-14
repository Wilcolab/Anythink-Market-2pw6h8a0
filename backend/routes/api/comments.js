/**
 * Express router for comment-related API endpoints
 * @type {Express.Router}
 */

/**
 * Retrieves all comments for a specific item
 * @route GET /comments/:itemId
 * @param {string} req.params.itemId - The ID of the item to fetch comments for
 * @param {Object} req.user - The authenticated user object
 * @returns {Object} JSON object containing an array of comments formatted for the user
 * @returns {Array} comments - Array of comment objects with author details
 * @throws {Error} Passes errors to the next middleware
 */

/**
 * Deletes a comment by its ID
 * @route DELETE /comments/:commentId
 * @param {string} req.params.commentId - The ID of the comment to delete
 * @param {Object} req.user - The authenticated user object with _id property
 * @returns {void} Returns 204 No Content on successful deletion
 * @returns {Object} 404 JSON error if comment not found
 * @returns {Object} 403 JSON error if user is not authorized to delete the comment
 * @throws {Error} Passes errors to the next middleware
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

router.get("/comments/:itemId", async (req, res, next) => {
  try {
    const comments = await Comment.find({ item: req.params.itemId }).populate(
      "author",
      "username bio image isVerified"
    );
    res.json({ comments: comments.map((comment) => comment.toJSONFor(req.user)) });
  } catch (err) {
    next(err);
  }
});

// for delete
router.delete("/comments/:commentId", async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    if (comment.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "You are not authorized to delete this comment" });
    }
    await comment.remove();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});
module.exports = router;
