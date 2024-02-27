import mongoose from "mongoose";

const userPost = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const UserPostModel = mongoose.model("Post", userPost);

export default UserPostModel;
