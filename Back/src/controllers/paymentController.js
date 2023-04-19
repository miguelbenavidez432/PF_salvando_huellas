const { createPreference } = require("../handlers/paymentHandler");

async function createPayment(req, res) {
  const { unit_price } = req.body;

  let donations = {
    items: [
      {
        title: "Donations",
        unit_price,
        quantity: 1,
      },
    ],
  };

  const preferenceId = await createPreference(donations);
  res.status(200).json({ preferenceId });
}

module.exports = {
  createPayment,
};
