class ViewController {
  showLogin(req, res) {
    res.render("login", { error: null });
  }

  showUserDashboard(req, res) {
    res.render("user-dashboard", {
      username: req.user.username,
    });
  }

  showAdminDashboard(req, res) {
    res.render("admin-dashboard", {
      username: req.user.username,
    });
  }
}

module.exports = new ViewController();
