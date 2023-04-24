const opinionsRoute = require("express").Router()
const {
  createOpinionHandler,
  getAllOpinionsHandler,
} = require("../handlers/opinionsHandler");
const authjwt = require('../Middleware/authjwt')

opinionsRoute.post("/register/:id", authjwt.authjwt, createOpinionHandler);
opinionsRoute.get("/", authjwt.authjwt, getAllOpinionsHandler)

module.exports = opinionsRoute
