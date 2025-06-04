
import express, { Router, Request, Response } from 'express';
import { getMessages, createMessage } from '../controllers/message.controller';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  getMessages(req, res);
});

router.post('/', (req: Request, res: Response) => {
  createMessage(req, res);
});

export default router;