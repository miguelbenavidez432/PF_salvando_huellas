const { Router } = require("express");

const dogsRouter = require("./dogs");
const router = Router();

router.use("/dogs", dogsRouter);

module.exports = router;
