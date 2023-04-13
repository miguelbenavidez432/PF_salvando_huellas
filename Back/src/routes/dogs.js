const dogsRoutes = require('express').Router();
const {
  getAllDogsHandler,
  getDogsByIdHandler,
  getDogsByNameHandler,
} = require("../controllers/dogController");

dogsRoutes.get("/", getAllDogsHandler);
dogsRoutes.get("/:id", getDogsByIdHandler);
dogsRoutes.get("/?name", getDogsByNameHandler);

module.exports = dogsRoutes;
