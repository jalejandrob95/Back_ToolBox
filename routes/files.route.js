import { Router } from 'express';
import { listFiles } from '../controllers/fileManager.controller';

const router = Router();

router.get('/data');

export default router;
