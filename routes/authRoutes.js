const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Rutas públicas
router.post("/register", authController.register);
router.post("/login", authController.login);

// Ruta protegida de logout
router.post("/logout", authMiddleware, authController.logout);

module.exports = router;
