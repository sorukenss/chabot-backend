import axios, { AxiosError } from 'axios';

const API_URL = 'http://pocki-api-env-1.eba-pprtwpab.us-east-1.elasticbeanstalk.com/api/getOpenaiResponse';

export const getOpenAIResponse = async (input: string): Promise<string> => {
  try {
    const response = await axios.post(API_URL, { input });
    return response.data.choices[0].message.content;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error al llamar a la IA (Axios):', error.message);
      return `Error de Axios: ${error.message}`;
    } else if (error instanceof Error) {
      console.error('Error general:', error.message);
      return `Error inesperado: ${error.message}`;
    } else {
      console.error('Error desconocido:', error);
      return 'Ocurrió un error desconocido.';
    }
  }
};