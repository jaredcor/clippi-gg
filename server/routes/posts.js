import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import { getUser } from "../controllers/users.js";

const router = express.Router();

/* Read */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* Update */
router.patch("/:id/like", verifyToken, likePost);

export default router;