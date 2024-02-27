import express from "express";
import {
  userLoginController,
  userRegistrationController,
} from "../controllers/user.controller.js";
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";

const router = express.Router();
//user routes

//user registration controller
router.post("/signup", userRegistrationController);

//user login controller
router.post("/login", userLoginController);

//user auth check // private route
router.get("/user-auth", requireSignIn, (req, res) => {
  return res.status(200).json({ ok: true });
});

//admin auth check // private route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  return res.status(200).json({ ok: true });
});

export default router;
