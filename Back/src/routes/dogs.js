const dogsRoutes = require("express").Router();
const {
  getAllDogsHandler,
  getDogsByIdHandler,
  getDogsByNameHandler,
  postDogsHandler,
} = require("../controllers/dogController");

router.get("/", getAllDogsHandler);
router.get("/:id", getDogsByIdHandler);
router.get("/", getDogsByNameHandler);
router.post("/newdog", postDogsHandler);

module.exports = dogsRoutes;
