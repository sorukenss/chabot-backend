"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const message_route_1 = __importDefault(require("./routes/message.route"));
const swagger_1 = require("./swagger");
const corsOptions = {
    origin: 'http://localhost:5173', // Solo permite este origen
    methods: ['GET', 'POST'], // Solo estos métodos
    allowedHeaders: ['Content-Type', 'Authorization'], // Solo estos headers
    credentials: true, // Permitir cookies si las usas
};
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
// Rutas
app.use('/messages', message_route_1.default);
// Documentación de Swagger
app.use('/api-docs', swagger_1.swaggerUi.serve, swagger_1.swaggerUi.setup(swagger_1.swaggerSpec));
// Redirige a Swagger en la URL raíz
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});
exports.default = app;
