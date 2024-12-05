const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();

// Configuraciones
const sequelize = require("./config/database");
const User = require("./models/user");

// Inicializar aplicación
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Configurar motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Importar rutas
const authRoutes = require("./routes/authRoutes");
const viewRoutes = require("./routes/viewRoutes");

// Usar rutas
app.use("/auth", authRoutes);
app.use("/", viewRoutes);

// Configuración de base de datos
const PORT = process.env.PORT || 3000;

// Sincronizar modelos y iniciar servidor
const initializeServer = async () => {
  try {
    // Sincronizar modelos
    await sequelize.sync({ force: false });
    console.log("Modelos sincronizados correctamente");

    // Crear usuario admin por defecto si no existe
    const [adminUser, created] = await User.findOrCreate({
      where: { username: "admin" },
      defaults: {
        username: "admin",
        password: "AdminPassword123!",
        role: "admin",
      },
    });

    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al inicializar la aplicación:", error);
  }
};

// Manejar errores no capturados
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

// Iniciar servidor
initializeServer();
