import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import messageRouter from './routes/message.route';
import { swaggerUi, swaggerSpec } from './swagger';

const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'],         
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true,                
};

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

// Rutas
app.use('/messages', messageRouter);

// Documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Redirige a Swagger en la URL raíz
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

export default app;