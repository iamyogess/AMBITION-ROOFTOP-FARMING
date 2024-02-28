import mongoose, { Schema } from "mongoose";

const userPost = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

const UserPostModel = mongoose.model("Post", userPost);

export default UserPostModel;
