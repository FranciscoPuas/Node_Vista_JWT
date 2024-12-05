const { verifyToken } = require("../config/jwt");
const User = require("../models/user");

const authMiddleware = async (req, res, next) => {
  // Verificar token en cookies o headers
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No autorizado" });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: "Token inválido" });
  }

  try {
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    req.user = user;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error de autenticación", error: error.message });
  }
};

module.exports = authMiddleware;
