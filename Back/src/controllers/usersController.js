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

async function getUserByEmail(emailU) {
  const userByEmail = await Users.findOne({
    where: {
      emailU: {
        [Op.like]: `%${emailU}%`,
      },
    },
  })
  return userByEmail
}

const updateUser = async (id, nameU, lastNameU, passwordU, phoneU, addressU, reasonU, isAdminU) =>{
  await Users.update({ 
    nameU: nameU,
    lastNameU: lastNameU,
    passwordU: passwordU,
    phoneU: phoneU,
    addressU: addressU,
    reasonU: reasonU,
    isAdminU: isAdminU,
   }, {
    where: {
      id_User: {
        [Op.eq]: id,
      }
    }
  })
}

async function createUser(nameU, lastNameU, passwordU, idNumbU, emailU, phoneU, addressU, reasonU, isAdminU ){

        const newUser = await Users.create({
            nameU: nameU.slice(0,1).toUpperCase()+nameU.slice(1).toLowerCase(),
            lastNameU: lastNameU.slice(0,1).toUpperCase()+lastNameU.slice(1).toLowerCase(), 
            passwordU: passwordU,
            idNumbU: idNumbU,
            emailU: emailU.toLowerCase(), 
            phoneU: phoneU, 
            addressU: addressU, 
            reasonU: reasonU,
            isAdminU: isAdminU
        })

        return newUser
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByName,
  getUserByLastName,
  createUser,
  updateUser,
  getUserByEmail,
}
