proyecto backend hecho con:

✅ Node.js \
✅ Express \
✅ TypeScript \
✅ MySQL \
✅ Swagger UI (documentación) \
✅ Integración con una IA externa \
Este README te ayudará a que los evaluadores entiendan fácilmente qué hace tu backend, cómo instalarlo, ejecutarlo y probarlo. 
---------------------------------------------------------------------------------------------------------------------------------------

🧠 Chatbot Backend - Prueba Técnica
Este es el backend de una aplicación web fullstack que permite a los usuarios interactuar con un chatbot. El usuario puede escribir mensajes, enviarlos al backend, y recibir una respuesta generada por una IA externa. Los mensajes se almacenan en una base de datos MySQL y se devuelven en tiempo real.

🧩 Tecnologías utilizadas \
Node.js : Entorno de ejecución del backend. \
Express.js : Framework HTTP para crear rutas RESTful. \
TypeScript : Tipado seguro y mayor mantenibilidad. \
MySQL : Base de datos relacional para almacenar mensajes. \
Axios : Para hacer llamados a la IA externa.  \
Swagger UI : Documentación interactiva de la API. \
Cors : Soporte para solicitudes desde diferentes orígenes (frontend). \
Dotenv : Gestión de variables de entorno. \
---------------------------------------------------------------------------------------------------------------------
📦 Requisitos previos
Antes de comenzar, asegúrate de tener instalado:

Node.js (v18 o superior) \
npm (viene con Node.js) \
Docker (opcional pero recomendado para MySQL) \

🚀 Instalación
1. Clona el repositorio \
 git clone https://github.com/sorukenss/chabot-backend  \
cd chatbot-backend 
---------------------------------------------------------------------------------------------
2. Instala dependencias \
    npm install 
-----------------------------------------------------------------------------------------
3. Configura las variables de entorno
Crea un archivo .env en la raíz del proyecto: \
PORT=3000 \
DB_HOST=localhost \
DB_PORT=3306 \
DB_USER=root \
DB_PASSWORD=123456 \
DB_NAME=chatbot 
-------------------------------------------------------------------------------------------------------------
🐳 Despliegue local con Docker (recomendado)
Puedes levantar una base de datos MySQL local con Docker:

crear el contenedor de docker con la imagen de la bd \ 
docker run --name chatbot-mysql -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=chatbot -p 3307:3306 -d mysql:8.0 \

abrimos la terminal ejecutamos este comando : \
docker exec -it chatbot-mysql mysql -u root -p \
nos pedira el password ponemos el siguiente: 123456\

luego ejecutamos el siguiente script para crear nuestra tabla:  \

USE chatbot; \

CREATE TABLE messages ( \
    id_message INT AUTO_INCREMENT PRIMARY KEY, \
    content TEXT NOT NULL, \
    sender ENUM('bot', 'user') NOT NULL, \
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP \
); \


luego esto para ver la tabla : DESCRIBE messages; \
debe de verse algo asi 
![image](https://github.com/user-attachments/assets/0291d1d8-1c2d-40fd-8cd8-4d70c4d61cc6)

salimos con el siguiente comando : exit;
----------------------------------------------------------------------------------------------------------------------
🛠️ Estructura del Proyecto

![image](https://github.com/user-attachments/assets/d40e3dc5-cedd-4de9-974c-ee919a7106ed)

-----------------------------------------------------------------------------------------------------------------
👥 Desarrollado por Isaac Pimienta Morales \
📧 isaacpimienta358@gmail.com \
📱 GitHub: sorukenss \
