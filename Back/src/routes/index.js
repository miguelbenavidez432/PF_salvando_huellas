const router = require("express").Router();
const dogsRouter = require("./dogs");
const userRouter = require("./userRoutes");
const opinionsRoutes = require("./opinionsRouter");
const postRoutes = require('./postRoutes');

router.use("/dogs", dogsRouter);
router.use("/users", userRouter);
router.use("/opinions", opinionsRoutes);
router.use('/posts', postRoutes)

module.exports = router;
