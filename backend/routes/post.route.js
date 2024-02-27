import express from "express";
import {
  userDeleteController,
  userPostController,
  userUpdateController,
} from "../controllers/post.controller.js";
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/add-post", userPostController);

router.delete("/:id", requireSignIn, isAdmin, userDeleteController);

router.put("/update-post/:id", requireSignIn, userUpdateController);

export default router;
