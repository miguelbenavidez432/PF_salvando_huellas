const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-2189009441301413-041816-8faa35a8748558097ba6222785cb07ea-612397503",
});

async function createPreferenceDonation(donations) {
  try {
    const response = await mercadopago.preferences.create(donations);
    console.log(response);
    return response.body.id;
  } catch (error) {
    handleError(error);
  }
}

async function createPreferenceArticles(articles) {
  try {
    const response = await mercadopago.preferences.create(articles);
    return response.body.id;
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  throw new Error("Could not create payment");
}

module.exports = { createPreferenceDonation, createPreferenceArticles };
