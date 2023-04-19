const { Op } = require("sequelize")
const { Users } = require('../db')

async function getAllUsers() {
  const allUsers = await Users.findAll()
  return allUsers
}

async function getUserById(id) {
  const user = await Users.findByPk(id)
  return user
}

async function getUserByName(nameU) {
  const userByName = await Users.findAll({
    where: {
      nameU: {
        [Op.like]: `%${nameU}%`,
      },
    },
  })
  return userByName
}

async function getUserByLastName(lastNameU) {
  const userByLastName = await Users.findAll({
    where: {
      lastNameU: {
        [Op.like]: `%${lastNameU}%`,
      },
    },
  })
  return userByLastName
}

async function createUser(nameU, lastNameU, passwordU, idNumbU, emailU, phoneU, addressU, reasonU ){

        const newUser = await Users.create({
            nameU: nameU.toLowerCase(),
            lastNameU: lastNameU.toLowerCase(), 
            passwordU: passwordU,
            idNumbU: idNumbU,
            emailU: emailU, 
            phoneU: phoneU, 
            addressU: addressU, 
            reasonU: reasonU,
        })
        return newUser
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByName,
  getUserByLastName,
  createUser,
}
