const dogsRoutes = require('express').Router();
const {
  getAllDogsHandler,
  getDogsByIdHandler,
  getDogsByNameHandler,
} = require("../handlers/dogHandler");

dogsRoutes.get("/", getAllDogsHandler);
dogsRoutes.get("/", getDogsByNameHandler);
dogsRoutes.get("/:id", getDogsByIdHandler);

module.exports = dogsRoutes;
