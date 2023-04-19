const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-2189009441301413-041816-8faa35a8748558097ba6222785cb07ea-612397503",
});

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

  mercadopago.preferences
    .create(donations)
    .then(function (response) {
      console.log(response);
    })

    .catch(function (error) {
      console.log(error);
    });
}

module.exports = {
  createPayment,
};
