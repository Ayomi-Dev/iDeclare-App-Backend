import { Router } from 'express';
import { getVerse } from '../controllers/bibleController';
const router = Router();
router.get('/verse', getVerse);
// Export the router to be used in the main app
export default router;
