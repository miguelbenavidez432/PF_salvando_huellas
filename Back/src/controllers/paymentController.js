const {
  createPreferenceArticles,
  createPreferenceDonation,
} = require("../handlers/paymentHandler");

async function createPaymentDonations(req, res) {
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

  const preferenceId = await createPreferenceDonation(donations);
  res.status(200).json({ preferenceId });
}

async function createPaymentArticles(req, res) {
  const { articles } = req.body;
  if (articles && articles.length > 0) {
    const articlesToSend = {
      items: articles,
    };
    const preferenceId = await createPreferenceArticles(articlesToSend);
    res.status(200).json({ preferenceId });
  }
}

module.exports = {
  createPaymentDonations,
  createPaymentArticles,
};
