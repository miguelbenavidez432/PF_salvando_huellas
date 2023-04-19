const { Stock } = require('../db')

async function getAllStock() {
  const allStock = await Stock.findAll()
  return allStock
}

async function createStock(amountS){

        const newStock = await Stock.create({
          amountS: amountS
        })
        return newStock
}

module.exports = {
  getAllStock,
  createStock
}
