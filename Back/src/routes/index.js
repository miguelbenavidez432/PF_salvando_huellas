const router = require("express").Router()
const dogsRoute = require("./dogsRoute")
const usersRoute = require("./usersRoute")
const opinionsRoute = require("./opinionsRoute")
const postsRoute = require('./postsRoute')
const articlesRoute = require('./articlesRoute')
const referencesRoute = require('./referencesRoute')

router.use("/dogs", dogsRoute)
router.use("/users", usersRoute)
router.use("/opinions", opinionsRoute)
router.use('/posts', postsRoute)
router.use('/articles', articlesRoute)
router.use('/references', referencesRoute)

module.exports = router
