const {
  getAllStock,
  createStock,
} = require('../controllers/StockController')

const getAllStockHandler = async (req, res) => {
  try {
    const allStock = await getAllStock()
    res.status(200).json(allStock)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const createStockHandler = async (req, res) => {
  try {
    const {
      amountS
    } = req.body

    if (!amountS ) {
      return res.status(400).send(`You must complete all fields 😅`)
    } else {
      await createStock(amountS)
      res.status(200).send(`Stock ${amountS} created successfully`)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  getAllStockHandler,
  createStockHandler,
}