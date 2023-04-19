const dogsRoute = require("express").Router();
const {
  getDogsHandler,
  getDogByIdHandler,
  postDogHandler,
  deleteDogHandler,
  
} = require("../handlers/dogsHandler");

dogsRoute.get("/", getDogsHandler);
dogsRoute.post("/newdog", postDogHandler);
dogsRoute.get("/:id", getDogByIdHandler);
dogsRoute.delete('/delete/:id', deleteDogHandler)


module.exports = dogsRoute;
