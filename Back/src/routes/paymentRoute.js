const paymentRoute = require("express").Router();
const { createPayment } = require("../controllers/paymentController");

paymentRoute.post("/", createPayment);

module.exports = paymentRoute;
