"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOpenAIResponse = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'http://pocki-api-env-1.eba-pprtwpab.us-east-1.elasticbeanstalk.com/api/getOpenaiResponse';
const getOpenAIResponse = async (input) => {
    try {
        const response = await axios_1.default.post(API_URL, { input });
        return response.data.choices[0].message.content;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error al llamar a la IA (Axios):', error.message);
            return `Error de Axios: ${error.message}`;
        }
        else if (error instanceof Error) {
            console.error('Error general:', error.message);
            return `Error inesperado: ${error.message}`;
        }
        else {
            console.error('Error desconocido:', error);
            return 'Ocurrió un error desconocido.';
        }
    }
};
exports.getOpenAIResponse = getOpenAIResponse;
