/**
 * @openapi
 * /:
 *   get:
 *     summary: Obtiene todos los mensajes del chat
 *     responses:
 *       200:
 *         description: Lista de mensajes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   id_message:
 *                     type: integer
 *                   content:
 *                     type: string
 *                   sender:
 *                     type: string
 *                     enum: ['bot', 'user']
 *                   created_at:
 *                     type: string
 *                     format: date-time
 */
/**
 * @openapi
 * /:
 *   post:
 *     summary: Envía un mensaje del usuario y devuelve la respuesta del bot
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "¿Cómo estás?"
 *     responses:
 *       200:
 *         description: Mensaje del usuario + respuesta del bot
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   id_message:
 *                     type: integer
 *                   content:
 *                     type: string
 *                   sender:
 *                     type: string
 *                     enum: ['bot', 'user']
 *                   created_at:
 *                     type: string
 *                     format: date-time
 */





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