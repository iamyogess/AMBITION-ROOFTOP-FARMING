import express from "express";
import {
  getUserPost,
  userDeleteController,
  userPostController,
  userUpdateController,
} from "../controllers/post.controller.js";
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/add-post", requireSignIn, userPostController);

router.get("/get-post", getUserPost);

router.delete("/:id", requireSignIn, isAdmin, userDeleteController);

router.put("/update-post/:id", requireSignIn, userUpdateController);

export default router;
