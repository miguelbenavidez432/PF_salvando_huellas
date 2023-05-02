const {
  createPreferenceArticles,
  createPreferenceDonation,
} = require("../handlers/paymentHandler");
const { Donations, Purchase } = require("../db");

async function createPaymentDonations(req, res) {
  const { unit_price } = req.body;

  const donation = await Donations.create({
    unit_price,
    created_at: new Date(),
  });

  let donations = {
    items: [
      {
        title: "Donations",
        unit_price,
        quantity: 1,
      },
    ],
    back_urls: {
      success: "http://127.0.0.1:5173/donar",
      failure: "http://127.0.0.1:5173/donar",
      pending: "http://127.0.0.1:5173/donar",
    },
    external_reference: donation.id,
  };

  const preferenceId = await createPreferenceDonation(donations);

  res.status(200).json({ preferenceId });
}

async function createPaymentArticles(req, res) {
  const { articles } = req.body;
  if (articles && articles.length > 0) {
    const articlesToSend = {
      items: articles,

      back_urls: {
        success: "http://127.0.0.1:5173/carrito",
        failure: "http://127.0.0.1:5173/carrito",
        pending: "http://127.0.0.1:5173/carrito",
      },
    };
    const preferenceId = await createPreferenceArticles(articlesToSend);

    const purchase = new Purchase({
      articles,
      payment_preference_id: preferenceId,
      date: new Date(),
    });
    await purchase.save();
    res.status(200).json({ preferenceId });
  }
}

module.exports = {
  createPaymentDonations,
  createPaymentArticles,
};
