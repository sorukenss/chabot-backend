"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessage = exports.getMessages = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const openai_service_1 = require("../services/openai.service");
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
const getMessages = async (req, res) => {
    try {
        const messages = await prisma_1.default.chatMessage.findMany({
            orderBy: { created_at: 'asc' },
        });
        res.json(messages);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los mensajes' });
    }
};
exports.getMessages = getMessages;
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
const createMessage = async (req, res) => {
    const { content } = req.body;
    if (!content)
        return res.status(400).json({ error: 'El contenido es requerido' });
    try {
        const userMessage = await prisma_1.default.chatMessage.create({
            data: {
                content,
                sender: 'user',
            },
        });
        const botResponse = await (0, openai_service_1.getOpenAIResponse)(content);
        const botMessage = await prisma_1.default.chatMessage.create({
            data: {
                content: botResponse,
                sender: 'bot',
            },
        });
        res.json([userMessage, botMessage]);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al procesar el mensaje' });
    }
};
exports.createMessage = createMessage;
//# sourceMappingURL=message.controller.js.map