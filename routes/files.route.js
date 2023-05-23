import { Router } from 'express';
import { listFiles } from '../controllers/fileManager.controller.js';

const router = Router();
router.get('/data', listFiles);

export default router;
