const {
  createPreferenceArticles,
  createPreferenceDonation,
} = require("../handlers/paymentHandler");
const { Donations, Carts } = require("../db");

async function createPaymentDonations(req, res) {
  const { unit_price } = req.body;

  const donation = await Donations.create({
    unit_price,
    status: "pending",
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
      success: "http://127.0.0.1:5173/donar?status=success",
      failure: "http://127.0.0.1:5173/donar?status=failure",
      pending: "http://127.0.0.1:5173/donar?status=pending",
    },
    external_reference: donation.id,
  };

  const preferenceId = await createPreferenceDonation(donations);

  res.status(200).json({ preferenceId });
}

async function createPaymentArticles(req, res) {
  const { articles, userId } = req.body;
  console.log(userId);

  if (articles && articles.length > 0) {
    const articlesToSend = {
      items: articles,
      userId,

      back_urls: {
        success: "http://127.0.0.1:5173/carrito?status=success",
        failure: "http://127.0.0.1:5173/carrito?status=failure",
        pending: "http://127.0.0.1:5173/carrito?status=pending",
      },
    };
    const preferenceId = await createPreferenceArticles(articlesToSend);

    console.log(userId);

    await Carts.create({
      articles,
      userId,
    });

    res.status(200).json({ preferenceId });
  }
}

async function getCartByUser(req, res) {
  const { userId } = req.params;

  try {
    const carts = await Carts.findAll({ userId });
    res.status(200).json({ carts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting user's carts" });
  }
}

module.exports = {
  createPaymentDonations,
  createPaymentArticles,
  getCartByUser,
};
