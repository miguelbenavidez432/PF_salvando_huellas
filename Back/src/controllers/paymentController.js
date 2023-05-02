const {
  createPreferenceArticles,
  createPreferenceDonation,
} = require("../handlers/paymentHandler");
const { Donations, Purchases } = require("../db");

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

async function getCartByUser(userId) {
  try {
    const purchases = await Purchases.find({ user_id: userId }).exec();
    const carts = purchases.map((purchase) => {
      return {
        id: purchase._id,
        date: purchase.date,
        payment_status: purchase.payment_status,
        articles: purchase.articles,
        payment_preference_id: purchase.payment_preference_id,
      };
    });
    return carts;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function createPaymentArticles(req, res) {
  const { articles } = req.body;
  if (articles && articles.length > 0) {
    const articlesToSend = {
      items: articles,

      back_urls: {
        success: "http://127.0.0.1:5173/carrito?status=success",
        failure: "http://127.0.0.1:5173/carrito?status=failure",
        pending: "http://127.0.0.1:5173/carrito?status=pending",
      },
    };
    const preferenceId = await createPreferenceArticles(articlesToSend);

    const purchase = new Purchases({
      articles,
      payment_status: "pending",
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
  getCartByUser,
};
