import JWT from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";

//require login
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin

export const isAdmin = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user._id);
    if (user.isAdmin !== true) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized Access!" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ success: false, message: "Error in admin middleware!" });
  }
};
