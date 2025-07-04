import { Router } from "express";
import { getVerse } from "../controllers/bibleController";

const router = Router();

router.get("/verse", getVerse);
export const dummy = "dummy"; // Dummy export to avoid circular dependency issues

export default router
