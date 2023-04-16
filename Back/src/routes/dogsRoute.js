const dogsRoute = require("express").Router()
const {
  getAllDogsHandler,
  getDogByIdHandler,
  getDogByNameHandler,
  postDogHandler,
} = require('../handlers/dogsHandler')

dogsRoute.get("/", getAllDogsHandler)
dogsRoute.get("/:id", getDogByIdHandler)
dogsRoute.get("/", getDogByNameHandler)
dogsRoute.post("/newdog", postDogHandler)

module.exports = dogsRoute
