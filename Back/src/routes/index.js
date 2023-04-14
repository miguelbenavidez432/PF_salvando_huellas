const router = require("express").Router();
const dogsRouter = require("./dogs");
const userRouter = require("./userRoutes");
const opinionsRoutes = require("./opinionsRouter");

router.use("/dogs", dogsRouter);
router.use("/users", userRouter);
router.use("/opinions", opinionsRoutes);

module.exports = router;
