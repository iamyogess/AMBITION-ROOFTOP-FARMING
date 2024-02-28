import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    comment: { type: String },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  { timestamps: true }
);

const CommentModel = mongoose.model("Comment", commentSchema);

export default CommentModel;
