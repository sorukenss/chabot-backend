# 🧠 Chatbot Backend - Prueba Técnica

**Backend de aplicación web fullstack** que permite a los usuarios interactuar con un chatbot inteligente. Los usuarios pueden escribir mensajes, enviarlos al backend y recibir respuestas generadas por **IA externa**. Todos los mensajes se almacenan en **MySQL** y se devuelven en tiempo real.

## 🚀 Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución del backend
- **Express.js** - Framework HTTP para crear rutas RESTful
- **TypeScript** - Tipado seguro y mayor mantenibilidad
- **MySQL** - Base de datos relacional para almacenar mensajes
- **Axios** - Cliente HTTP para llamadas a IA externa
- **Swagger UI** - Documentación interactiva de la API
- **Cors** - Soporte para solicitudes cross-origin
- **Dotenv** - Gestión de variables de entorno
- **Prisma ORM** - ORM moderno type-safe para base de datos

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v18 o superior)
- **npm** (viene con Node.js)
- **Docker** (Obligatorio para crear la bd de MySQL)
- **Docker Compose** (Obligatorio para ejecutar la imagen de la bd de MySQL)

---

## ⚡ Instalación Rápida

### 1. **Clonar el repositorio**

```bash
git clone https://github.com/sorukenss/chabot-backend
cd chatbot-backend
```

### 2. **Instalar dependencias**

```bash
npm install
```

### 3. **Configurar variables de entorno**

Crea un archivo `.env` en la raíz del proyecto:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=123456
DB_NAME=chatbot
```
---
### 4 🐳 Configuración de Base de Datos con Docker

### **Paso 1: Crear contenedor MySQL**
Abrimos la terminal Para ejecutar todos los comandos de docker.
```bash
docker run --name chatbot-mysql -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=chatbot -p 3307:3306 -d mysql:8.0
```

### **Paso 2: Acceder al contenedor**

```bash
docker exec -it chatbot-mysql mysql -u root -p
```

**Contraseña:** `123456`

### **Paso 3: Crear tabla de mensajes**

```sql
USE chatbot;

CREATE TABLE messages (
    id_message INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    sender ENUM('bot', 'user') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### **Paso 4: Verificar tabla creada**

```sql
DESCRIBE messages;
```

**Resultado esperado:**
![image](https://github.com/user-attachments/assets/84276f8c-d839-4163-9b75-884a6727db3e)


### **Paso 5: Salir del contenedor**

```sql
exit;
```
---
 ### 5. 🌐Configurar Prisma ORM
bash# Generar cliente de Prisma
```
npx prisma generate
```
# Aplicar migraciones iniciales
Limpiamos la bd, luego de ejecutar el comando le damos Y, aceptamos
```
npx prisma migrate reset
```
luego ejecutramos el siguiente comando. Pasamos al paso 6 ejecutar la app.
```
npx prisma migrate dev --name init
```
---
🗄️ Esquema de Base de Datos (Prisma)
prisma// prisma/schema.prisma
```
model Message {
  id        Int      @id @default(autoincrement())
  content   String   @db.Text
  sender    Sender
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("messages")
}

enum Sender {
  user
  bot
}
```
### 6. 🏃‍♂️ Ejecutar la Aplicación

### **Modo desarrollo**

```bash
npm run dev
```

**El servidor estará disponible en:** `http://localhost:3000`
**Listo nuestro back en nuestro servidor local**

---

## 📡 Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/messages` | Obtener todos los mensajes |
| `POST` | `/api/messages` | Enviar nuevo mensaje al chatbot |
| `GET` | `/api-docs` | Documentación Swagger UI |

### **Ejemplo de uso:**

```bash
# Enviar mensaje al chatbot
curl -X POST http://localhost:3000/api/messages \
  -H "Content-Type: application/json" \
  -d '{"content": "Hola, ¿cómo estás?"}'
```

---

## 📖 Documentación API

**Accede a la documentación interactiva:** `http://localhost:3000/api-docs`

La documentación incluye:
- **Esquemas de datos**
- **Ejemplos de requests/responses**
- **Herramienta de pruebas integrada**

---

## 🗂️ Estructura del Proyecto

```
chatbot-backend/
├── src/
│   ├── controllers/          # Lógica de controladores
│   │   └── message.controller.ts
│   ├── routes/               # Rutas RESTful
│   │   └── message.route.ts
│   ├── services/             # Servicios de negocio
│   │   └── openai.service.ts
│   ├── prisma/               # Configuración Prisma
│   │   ├── schema.prisma     # Esquema de BD
│   │   └── prisma-client.ts  # Cliente configurado
│   ├── types/               # Definiciones TypeScript
│   ├── swagger.ts           # Configuración Swagger
│   ├── server.ts            # Configuración Express
│   └── index.ts             # Punto de entrada
├── prisma/
│   ├── migrations/          # Migraciones de BD
│   └── schema.prisma        # Esquema principal
├── docker-compose.yml       # Configuración Docker
├── .env                     # Variables de entorno
├── package.json            # Dependencias
└── README.md              # Este archivo
```

![image](https://github.com/user-attachments/assets/d40e3dc5-cedd-4de9-974c-ee919a7106ed)

---

## ⚠️ Solución de Problemas

### **Error de conexión a MySQL:**
- Verifica que Docker esté ejecutándose
- Confirma que el puerto 3307 esté disponible
- Revisa las credenciales en el archivo `.env`

### **Puerto 3000 ocupado:**
- Cambia el `PORT` en el archivo `.env`
- O detén el proceso que usa el puerto 3000

---

## 👨‍💻 Desarrollado por

**Isaac Pimienta Morales**

- 📧 **Email:** isaacpimienta358@gmail.com
- 🐙 **GitHub:** [@sorukenss](https://github.com/sorukenss)

---

