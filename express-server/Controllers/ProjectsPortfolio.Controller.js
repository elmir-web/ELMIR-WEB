// __________________________________________________ СЕРВИСЫ
const ProjectsPortfolioService = require("../Services/ProjectsPortfolio.Service"); // Контроллер аккаунта

class ProjectsPortfolioController {
  async getAllProjectsPortfolio(req, res) {
    const allProjectsPortfolio =
      await ProjectsPortfolioService.getAllProjectsPortfolio();

    res.status(200).json(allProjectsPortfolio);
  }
}

module.exports = new ProjectsPortfolioController();
