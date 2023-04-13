const router = require('express').Router();
const dogsRouter = require("./dogs");
const userRouter = require('./userRoutes')

router.use("/dogs", dogsRouter);
router.use('/users', userRouter)

module.exports = router;
