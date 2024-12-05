const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Rutas de vistas
router.get("/", viewController.showLogin);

router.get(
  "/user-dashboard",
  authMiddleware,
  roleMiddleware(["user", "admin"]),
  viewController.showUserDashboard
);

router.get(
  "/admin-dashboard",
  authMiddleware,
  roleMiddleware(["admin"]),
  viewController.showAdminDashboard
);

module.exports = router;
