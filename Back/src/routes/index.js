const router = require("express").Router()
const dogsRoute = require("./dogsRoute")
const usersRoute = require("./usersRoute")
const opinionsRoute = require("./opinionsRoute")
const postsRoute = require('./postsRoute')
const articlesRoute = require('./articlesRoute')
const donationsRoute = require('./donationsRoute')


router.use("/dogs", dogsRoute)
router.use("/users", usersRoute)
router.use("/opinions", opinionsRoute)
router.use('/posts', postsRoute)
router.use('/articles', articlesRoute)
router.use('/donations', donationsRoute)


module.exports = router
