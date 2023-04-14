const opinionsRoutes = require("express").Router();
const {
  createOpinionHandler,
  getOpinionsHandler,
} = require("../handlers/opinionsHandler");

opinionsRoutes.post("/opinion", createOpinionHandler);
opinionsRoutes.get("/", getOpinionsHandler);

module.exports = opinionsRoutes;
