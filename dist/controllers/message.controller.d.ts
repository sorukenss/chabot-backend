import { Request, Response } from 'express';
/**
 * @openapi
 * /messages:
 *   get:
 *     summary: Obtiene todos los mensajes del chat.
 *     tags: [Messages]
 *     responses:
 *       200:
 *         description: Lista de mensajes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'
 */
export declare const getMessages: (req: Request, res: Response) => Promise<void>;
/**
 * @openapi
 * /messages:
 *   post:
 *     summary: Envía un mensaje y recibe respuesta del bot.
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Hola"
 *     responses:
 *       200:
 *         description: Mensaje enviado y respuesta del bot
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'
 */
export declare const createMessage: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
