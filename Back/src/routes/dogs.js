const dogsRoutes = require("express").Router();
const {
  getAllDogsHandler,
  getDogsByIdHandler,
  getDogsByNameHandler,
  postDogsHandler,
} = require('../handlers/dogHandler');

dogsRoutes.get("/", getAllDogsHandler);
dogsRoutes.get("/:id", getDogsByIdHandler);
dogsRoutes.get("/", getDogsByNameHandler);
dogsRoutes.post("/newdog", postDogsHandler);

module.exports = dogsRoutes;
