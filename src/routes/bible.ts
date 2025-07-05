import { Router } from "express";
import { getVerse } from "../controllers/bibleController";

const router = Router();

router.get("/verse", getVerse);


export default router
