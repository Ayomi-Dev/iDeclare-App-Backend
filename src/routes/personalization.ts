import { Router } from "express";
import { personalizeVerse } from "../controllers/personlizeController";

const router = Router()
router.post('/personalize', personalizeVerse);

export default router
