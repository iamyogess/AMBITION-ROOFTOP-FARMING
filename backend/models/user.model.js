import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    houseNo: { type: Number, required: true, unique: true },
    wardNo: { type: Number, required: true, unique: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

export { UserModel };
