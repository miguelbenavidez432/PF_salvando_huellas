const opinionsRoute = require("express").Router()
const {
  createOpinionHandler,
  getAllOpinionsHandler,
} = require("../handlers/opinionsHandler");

opinionsRoute.post("/register", createOpinionHandler);
opinionsRoute.get("/", getAllOpinionsHandler)

module.exports = opinionsRoute
