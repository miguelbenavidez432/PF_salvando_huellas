const router = require('express').Router();

const dogsRouter = require("./dogs");

router.use("/dogs", dogsRouter);

module.exports = router;
