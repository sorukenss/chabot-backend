"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUi = exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.swaggerSpec = swaggerSpec;
//# sourceMappingURL=swagger.js.map