const { Carts, Articles, Users } = require('../db')

// Function: Create an adoption
async function createCart(articles, id_User) {
  const newCart = await Carts.create({
    userId: id_User,
    articles: articles
  })
  return newCart
}

async function getAllCartsByUserId(id) {
  const carts = await Carts.findAll({
    where: {
      userId: Number(id)
    },
  })
  return carts
}

module.exports = {
  createCart,
  getAllCartsByUserId,
}