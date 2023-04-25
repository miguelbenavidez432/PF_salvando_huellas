const opinionsRoute = require("express").Router()
const {
  createOpinionHandler,
  getAllOpinionsHandler,
} = require("../handlers/opinionsHandler");
const authjwt = require('../Middleware/authjwt')

opinionsRoute.post("/register/:id", authjwt.authjwt, createOpinionHandler);
opinionsRoute.get("/", getAllOpinionsHandler)

module.exports = opinionsRoute
