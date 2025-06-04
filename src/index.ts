import { PrismaClient } from './generated/prisma';
import app from './server';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


const prisma = new PrismaClient();

export default prisma;