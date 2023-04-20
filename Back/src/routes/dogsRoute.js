const dogsRoute = require("express").Router();
const {
  getDogsHandler,
  getDogByIdHandler,
  postDogHandler,
  deleteDogHandler,
  disableDogHandler,
  enableDogHandler,
  updateDogHandler,
} = require("../handlers/dogsHandler");

dogsRoute.get("/", getDogsHandler);
dogsRoute.post("/register", postDogHandler);
dogsRoute.get("/:id", getDogByIdHandler);
dogsRoute.delete("/delete/:id", deleteDogHandler);
dogsRoute.put("/disable/:id", disableDogHandler);
dogsRoute.put("/enable/:id", enableDogHandler);
dogsRoute.put("/update/:id", updateDogHandler);

module.exports = dogsRoute;
