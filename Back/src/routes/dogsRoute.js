const dogsRoute = require("express").Router();
const {
  getDogsHandler,
  getDogByIdHandler,
  getDogByNameHandler,
  postDogHandler,
} = require("../handlers/dogsHandler");

dogsRoute.get("/", getDogsHandler);
dogsRoute.get("/name", getDogByNameHandler);
dogsRoute.post("/newdog", postDogHandler);
dogsRoute.get("/:id", getDogByIdHandler);

module.exports = dogsRoute;
