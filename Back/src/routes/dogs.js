const express = require("express");
const router = express.Router();
const {
  getAllDogsHandler,
  getDogsByIdHandler,
  getDogsByNameHandler,
} = require("../controllers/dogController");

router.get("/", getAllDogsHandler);
router.get("/:id", getDogsByIdHandler);
router.get("/?name", getDogsByNameHandler);

module.exports = router;
