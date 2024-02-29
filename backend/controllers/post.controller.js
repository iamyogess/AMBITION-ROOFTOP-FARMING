import UserPostModel from "../models/post.model.js";

export const userPostController = async (req, res) => {
  try {
    const postData = req.body;
    const post = new UserPostModel(postData);
    await post.save();
    return res
      .status(200)
      .json({ success: true, message: "Post added successfully!", post });
  } catch (error) {
    console.error("Error adding post:", error);
    return res
      .status(500)
      .json({ success: false, message: "Unable to add post!" });
  }
};

export const userDeleteController = async (req, res) => {
  const postId = req.params.id;
  console.log(postId);

  try {
    const deletedPost = await UserPostModel.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res
        .status(404)
        .json({ message: "Post not found or already deleted!" });
    }

    return res.status(200).json({ message: "Post deleted successfully!" });
  } catch (error) {
    console.error("Error deleting post:", error);
    return res
      .status(500)
      .json({ message: "Error deleting post from the database" });
  }
};

export const userUpdateController = async (req, res) => {
  try {
    const updatePost = await UserPostModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatePost) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({ message: "Post updated", data: updatePost });
  } catch (error) {
    console.error("Error updating post:", error); // Log the error for debugging
    return res.status(500).json({ message: "Unable to update post" });
  }
};

export const getUserPost = async (req, res) => {
  try {
    const posts = await UserPostModel.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, qus:posts });
  } catch (error) {
    console.error("Error fetching user posts:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error!" });
  }
};
