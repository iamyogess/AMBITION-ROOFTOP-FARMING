import express from "express";
import {
  userLoginController,
  userRegistrationController,
} from "../controllers/user.controller.js";

const router = express.Router();
//user routes

//user registration controller
router.post("/signup", userRegistrationController);

//user login controller
router.post("/login", userLoginController);

export default router;
