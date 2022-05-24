// __________________________________________________ ИМПОРТЫ
const Router = require("express");

// __________________________________________________ ОБЪЕКТЫ
const router = new Router();

// __________________________________________________ КОНТРОЛЛЕРЫ
const projectsPortfolioController = require("../controllers/ProjectsPortfolio.Controller"); // Контроллер аккаунта

// __________________________________________________ Middlewares

// __________________________________________________ Роутеры API
router.get(
  "/projects-portfolio",
  projectsPortfolioController.getAllProjectsPortfolio
);

// __________________________________________________ Экспорты
module.exports = router;
