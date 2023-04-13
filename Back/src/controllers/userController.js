const { Op } = require("sequelize");
const { Users } = require('../db');

async function getAllUsers() {
  const allUsers = await Users.findAll();
  return allUsers;
}

async function getUserById(id) {
  const user = await Users.findByPk(id);
  return user;
}

async function getUserByName(name) {
  const userByName = await Users.findAll({
    where: {
      nameD: {
        [Op.like]: `%${name}%`,
      },
    },
  });
  return userByName;
}

async function createUser(name, lastName, password, idNumbU, email, phone, address, reason ){

    const userExists = getUserByName(name)

    if(!userExists){
        const newUser = await Users.create({
            nameU: name.toLowerCase(),
            lastNameU: lastName, 
            passwordU: password,
            idNumbU: idNumbU,
            emailU: email, 
            phoneU: phone, 
            addressU: address, 
            reasonU: reason
        })
        return newUser
    }else{
        return `User ${name} already exists. Choose another name`
    }
}



module.exports = {
  getAllUsers,
  getUserById,
  getUserByName,
  createUser,
};
