import express from "express";
const router = express.Router();
import { requireSignIn } from "./../middlewares/auth.middleware.js";
import {
  createCommentController,
  getCommentController,
} from "../controllers/comment.controller.js";

router.post("/:id/comments/create", requireSignIn, createCommentController);
router.get("/comments/:id", getCommentController);

export default router;
