import { Request, Response } from 'express';
import { pool } from '../config/db.config';
import { getOpenAIResponse } from '../services/openai.service';

// Obtener todos los mensajes
export const getMessages = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM messages ORDER BY created_at ASC');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
};

// Enviar un mensaje y recibir respuesta del bot
export const createMessage = async (req: Request, res: Response) => {
  const { content } = req.body;

  if (!content) return res.status(400).json({ error: 'El contenido es requerido' });

  try {
    // Guardar mensaje del usuario
    const [userResult] = await pool.query(
      'INSERT INTO messages (content, sender) VALUES (?, ?)',
      [content, 'user']
    );

    const userInsertId = (userResult as any).insertId;

    // Llamar a la IA
    const botResponse = await getOpenAIResponse(content);

    // Guardar respuesta del bot
    const [botResult] = await pool.query(
      'INSERT INTO messages (content, sender) VALUES (?, ?)',
      [botResponse, 'bot']
    );

    const botInsertId = (botResult as any).insertId;

    // Devolver ambos mensajes
    const [messages] = await pool.query(
      'SELECT * FROM messages WHERE id_message IN (?, ?) ORDER BY created_at',
      [userInsertId, botInsertId]
    );

    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al procesar el mensaje' });
  }
};