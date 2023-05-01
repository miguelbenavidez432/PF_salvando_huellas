const {
  createCart,
  getAllCartsByUserId,
} = require('../controllers/cartsController')

const createCartHandler = async (req, res) => {
  const { articles, userId } = req.body
  try {
    if ( !articles || !userId ) {
      return res.status(400).send(`You must complete all fields 😅`)
    } else {
      const newCart = await createCart( articles, userId )   
      res.status(200).send(`Cart ${newCart.id_Cart} created successfully`)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getAllCartsByUserIdHandler = async (req, res) => {
  const { id } = req.params
  try {
    const cart = await getAllCartsByUserId(id)
    if (cart) {
      res.status(200).json(cart)
    } else {
      return res.status(500).json({ message: `Cart not found` })
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: `Error trying to find the Cart ` })
  }
}

module.exports = {
  createCartHandler,
  getAllCartsByUserIdHandler,
}