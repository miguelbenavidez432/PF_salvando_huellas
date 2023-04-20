const paymentRoute = require("express").Router();
const {
  createPaymentDonations,
  createPaymentArticles,
} = require("../controllers/paymentController");

paymentRoute.post("/purchases", createPaymentArticles);
paymentRoute.post("/donations", createPaymentDonations);

module.exports = paymentRoute;
