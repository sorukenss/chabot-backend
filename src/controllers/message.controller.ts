import { Request, Response } from 'express';
import prisma from '../index'
import { getOpenAIResponse } from '../services/openai.service';


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
export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await prisma.chatmessage.findMany({
      orderBy: { created_at: 'asc' },
    });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
};

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
export const createMessage = async (req: Request, res: Response) => {
  const { content } = req.body;

  if (!content) return res.status(400).json({ error: 'El contenido es requerido' });

  try {
    const userMessage = await prisma.chatmessage.create({
      data: {
        content,
        sender: 'user',
      },
    });

    const botResponse = await getOpenAIResponse(content);

    const botMessage = await prisma.chatmessage.create({
      data: {
        content: botResponse,
        sender: 'bot',
      },
    });

    res.json([userMessage, botMessage]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al procesar el mensaje' });
  }
};