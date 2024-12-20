﻿# Node_Vista_JWT

**Node Vista JWT** es una aplicación backend construida con Node.js y PostgreSQL que implementa autenticación JWT, gestión de roles (`user`, `admin`) y vistas renderizadas con EJS.

## 🚀 Características

- Autenticación segura con JWT y cookies.
- Gestión de usuarios y roles.
- Motor de plantillas EJS para renderizar vistas.
- Configuración de base de datos con Sequelize.
- Middlewares personalizados para autenticación y autorización.
- Sincronización automática de modelos con PostgreSQL.

---

## 🛠️ Tecnologías utilizadas

- **Node.js**
- **Express**
- **Sequelize**
- **PostgreSQL**
- **JWT (jsonwebtoken)**
- **bcryptjs**
- **EJS** como motor de plantillas.

---

## 📦 Instalación

## 1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/node-vista-jwt.git
   cd node-vista-jwt
   Instala las dependencias:
   ```

## bash
Mostrar siempre los detalles

Copiar código
npm install
Configura las variables de entorno creando un archivo .env basado en el ejemplo .env.example:

## env
Mostrar siempre los detalles

Copiar código
DB_NAME=tu_base_de_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=tu_secreto
PORT=3000
Sincroniza la base de datos:

npm start
Accede a la aplicación en: http://localhost:3000.

## Endpoints principales:
Autenticación:

POST /auth/register: Registro de usuarios.
POST /auth/login: Inicio de sesión.
POST /auth/logout: Cierre de sesión.
Vistas:

"" /: Página principal renderizada con EJS.
Usuarios predeterminados:
Admin:
Usuario: admin
Contraseña: AdminPassword123!
🔒 Seguridad
Contraseñas: Hasheadas utilizando bcryptjs.
Tokens JWT: Generados y verificados con un secreto definido en .env.
Autorización: Implementada con middlewares personalizados para validar roles.
📂 Estructura del proyecto
plaintext
Mostrar siempre los detalles


## 🛡️ Pruebas
Actualmente, no se han implementado pruebas automáticas. Puedes contribuir añadiendo casos de prueba.

## 🤝 Contribuciones
Si deseas contribuir a este proyecto:

## Haz un fork del repositorio.
Crea una rama para tu funcionalidad: git checkout -b nueva-funcionalidad.
Haz un commit de tus cambios: git commit -m 'Añade nueva funcionalidad'.
Haz push a la rama: git push origin nueva-funcionalidad.
Abre un Pull Request.
📝 Licencia
Este proyecto está bajo la licencia ISC. """


