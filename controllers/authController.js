const User = require("../models/user");
const { generateToken } = require("../config/jwt");

class AuthController {
  async register(req, res) {
    try {
      const { username, password, role } = req.body;

      // Validar si el usuario ya existe
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(400).json({ message: "El usuario ya existe" });
      }

      // Crear nuevo usuario
      const user = await User.create({
        username,
        password,
        role: role || "user",
      });

      res.status(201).json({
        message: "Usuario registrado exitosamente",
        userId: user.id,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al registrar usuario",
        error: error.message,
      });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;

      // Buscar usuario
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(401).json({ message: "Credenciales inválidas" });
      }

      // Validar contraseña
      const isMatch = await user.validatePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: "Credenciales inválidas" });
      }

      // Generar token
      const token = generateToken(user);

      // Enviar token como cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600000, // 1 hora
      });

      res.json({
        message: "Inicio de sesión exitoso",
        role: user.role,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al iniciar sesión",
        error: error.message,
      });
    }
  }

  logout(req, res) {
    // Limpiar cookie del token
    res.clearCookie("token");
    res.json({ message: "Sesión cerrada exitosamente" });
  }
}

module.exports = new AuthController();
