import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRegistrationController = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      houseNo,
      wardNo,
      isAdmin,
    } = req.body;

    // Check if all required fields are provided
    if (
      !fullName ||
      !email ||
      !password ||
      !confirmPassword ||
      !houseNo ||
      !wardNo
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required!" });
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists.",
      });
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password do not match.",
      });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = new UserModel({
      fullName,
      email,
      password: hashedPassword,
      houseNo,
      wardNo,
      isAdmin,
    });
    await newUser.save();

    //create jwt token
    const savedUser = await UserModel.findOne({ email });
    const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    return res.status(200).json({
      success: true,
      message: "User registration successful!",
      user: newUser,
      token: token,
    });
  } catch (error) {
    console.error("Error in user registration:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error!" });
  }
};

const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email or Password does not match!" });
    }
    //check user
    const registeredUser = await UserModel.findOne({ email });
    if (!registeredUser) {
      return res.status(404).json({
        success: false,
        message: "An account with this email address is not registered!",
      });
    }
    //compare
    const isMatch = await bcrypt.compare(password, registeredUser.password);
    if (registeredUser.email === email && isMatch) {
      const token = jwt.sign(
        { _id: registeredUser._id },
        process.env.JWT_SECRET,
        { expiresIn: "5d" }
      );
      return res
        .status(200)
        .json({ success: true, message: "Login successful!", token: token });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error!", error });
  }
};

export { userRegistrationController, userLoginController };
