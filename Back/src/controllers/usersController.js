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

async function getUserByName(name) {
  const userByName = await Users.findAll({
    where: {
      nameU: {
        [Op.like]: `%${name}%`,
      },
    },
  })
  return userByName
}

async function createUser(nameU, lastNameU, passwordU, idNumbU, emailU, phoneU, addressU, reasonU ){

        const newUser = await Users.create({
            nameU: nameU.toLowerCase(),
            lastNameU: lastNameU, 
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
  createUser,
}
