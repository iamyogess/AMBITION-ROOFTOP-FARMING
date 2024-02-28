import mongoose from "mongoose";
import CommentModel from "../models/comment.model.js";
import UserPostModel from "../models/post.model.js";

export const createCommentController = async (req, res) => {
  try {
    const { comment } = req.body;
    const postId = req.params.id;
    const post = await UserPostModel.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const newComment = new CommentModel({ comment, postId });
    await newComment.save();

    post.comment.push(newComment._id);
    await post.save();

    res.status(201).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getCommentController = async (req, res) => {
  try {
    const postId = req.params.id;
    const comments = await CommentModel.find({ postId });
    if (!comments) {
      return res.status(404).json({ error: 'No comments found for the specified post ID' });
    }
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching comments" });
  }
};
