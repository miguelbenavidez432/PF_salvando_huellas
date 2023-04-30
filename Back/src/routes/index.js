const router = require("express").Router();
const dogsRoute = require("./dogsRoute");
const usersRoute = require("./usersRoute");
const opinionsRoute = require("./opinionsRoute");
const postsRoute = require("./postsRoute");
const articlesRoute = require("./articlesRoute");
const donationsRoute = require("./donationsRoute");
const paymentRoute = require("./paymentRoute");
const referencesRoute = require("./referencesRoute");
const imagesRoute = require("./imagesRoute");
const adoptionsRoute = require("./adoptionsRoute");
const cartsRoute = require("./cartsRoute");

router.use("/dogs", dogsRoute);
router.use("/users", usersRoute);
router.use("/opinions", opinionsRoute);
router.use("/posts", postsRoute);
router.use("/articles", articlesRoute);
router.use("/donations", donationsRoute);
router.use("/payment", paymentRoute);
router.use("/references", referencesRoute);
router.use("/images", imagesRoute);
router.use("/adoptions", adoptionsRoute);
router.use("/carts", cartsRoute);

module.exports = router;
