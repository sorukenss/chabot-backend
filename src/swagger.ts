import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Chatbot API',
      version: '1.0.0',
      description: 'API para interactuar con un chatbot usando mensajes almacenados.',
    },
    components: {
      schemas: {
        Message: {
          type: 'object',
          properties: {
            id: { type: 'integer', format: 'int64', description: 'ID único del mensaje' },
            content: { type: 'string', description: 'Contenido del mensaje' },
            sender: { type: 'string', enum: ['USER', 'BOT'], description: 'Remitente del mensaje' },
            createdAt: { type: 'string', format: 'date-time', description: 'Fecha y hora de creación' },
          },
          required: ['content', 'sender'],
          example: {
            id: 1,
            content: 'Hola, ¿cómo estás?',
            sender: 'USER',
            createdAt: '2025-04-06T12:00:00Z',
          },
        },
      },
    },
  },
  apis: ['./src/controllers/*.ts'],
};

const swaggerSpec = swaggerJsDoc(options);

export { swaggerSpec, swaggerUi };