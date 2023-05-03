const {
  createPreferenceArticles,
  createPreferenceDonation,
} = require("../handlers/paymentHandler");
const { Donations, Carts } = require("../db");
const { sendEmailCarts } = require('../controllers/sendEmailController')
const { getUserById } = require('../controllers/usersController')

async function createPaymentDonations(req, res) {
  const { unit_price, userId } = req.body;

  const donation = await Donations.create({
    unit_price,
    status: "pending",
    created_at: new Date(),
    userId
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
      success: "http://localhost:5173/donar?status=success",
      failure: "http://localhost:5173/donar?status=failure",
      pending: "http://localhost:5173/donar?status=pending",
    },
    external_reference: donation.id,
  };

  const preferenceId = await createPreferenceDonation(donations);

  res.status(200).json({ preferenceId });
}

async function createPaymentArticles(req, res) {
  const { articles, userId } = req.body;
  const user = await getUserById(userId)
  
  if (articles && articles.length > 0) {
    const articlesToSend = {
      items: articles,
      userId,

      back_urls: {
        success: "http://localhost:5173/carrito?status=success",
        failure: "http://localhost:5173/carrito?status=failure",
        pending: "http://localhost:5173/carrito?status=pending",
      },
    };
    const preferenceId = await createPreferenceArticles(articlesToSend);
    let price = 0
    const art = articles.map(a => {
      price += a.quantity * a.unit_price
      return `
      Producto: ${a.title} 
      Precio: ${a.unit_price} 
      Cantidad: ${a.quantity} 
      `
    })

    await Carts.create({
      articles,
      userId,
    });
    await sendEmailCarts(user.emailU, user.nameU, user.lastNameU, price, art)

    res.status(200).json({ preferenceId });
  }
}

async function getCartByUser(req, res) {
  const userId = req.params.userId; // Usamos "userId" en lugar de "userId" para evitar confusión
  if (!userId) {
    res.status(400).json({ message: "userId parameter is missing or invalid" });
    return;
  }
  try {
    const carts = await Carts.findAll({
      where: { userId },
    });
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
