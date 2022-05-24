// __________________________________________________ СЕРВИСЫ
const AdminService = require("../Services/Admin.Service.js"); // Контроллер аккаунта

class AdminController {
  async accessLogin(req, res) {
    const { password } = req.body;

    const resultAccess = await AdminService.accessLogin(password);

    res.status(200).json(resultAccess);
  }
}

module.exports = new AdminController();
