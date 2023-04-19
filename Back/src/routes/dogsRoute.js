const dogsRoute = require("express").Router();
const {
  getDogsHandler,
  getDogByIdHandler,
  postDogHandler,
} = require("../handlers/dogsHandler");

dogsRoute.get("/", getDogsHandler);
dogsRoute.post("/newdog", postDogHandler);
dogsRoute.get("/:id", getDogByIdHandler);

module.exports = dogsRoute;
