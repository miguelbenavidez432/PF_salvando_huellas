const { Op } = require("sequelize");
const { Users } = require("../db");
const sequelize = require('sequelize')

async function getAllUsers() {
  const allUsers = await Users.findAll();
  return allUsers;
}

async function getUserById(id) {
  const user = await Users.findByPk(id);
  return user;
}

async function getUserByName(nameU) {
  const userByName = await Users.findAll({
    where: {
      nameU: {
        [Op.iLike]: `%${nameU}%`,
      },
    },
  });
  return userByName;
}

async function getUserByDNI(idNumbU){
  const userByDNI = await Users.findAll({
    where: sequelize.where( 
      sequelize.cast(sequelize.col('idNumbU'), 'varchar'),
      { [Op.iLike]: `%${idNumbU}%`      
    })
  })
  return userByDNI;
}

async function getUserByLastName(lastNameU) {
  const userByLastName = await Users.findAll({
    where: {
      lastNameU: {
        [Op.iLike]: `%${lastNameU}%`,
      },
    },
  });
  return userByLastName;
}

async function getUserByEmail(emailU) {
  const userByEmail = await Users.findAll({
    where: {
      emailU: {
        [Op.iLike]: `%${emailU}%`,
      },
    },
  });
  return userByEmail;
}

async function getEmailLogin(emailU) {
  const userByEmail = await Users.findOne({
    where: {
      emailU: {
        [Op.eq]: `${emailU}`,
      },
    },
  });
  return userByEmail;
}

const updateUser = async (
  id,
  nameU,
  lastNameU,
  phoneU,
  addressU,
  reasonU,
  idNumbU,
  emailU,
  isAdminU = false
) => {
  await Users.update(
    {
      nameU: nameU,
      lastNameU: lastNameU,
      phoneU: phoneU,
      addressU: addressU,
      reasonU: reasonU,
      idNumbU: idNumbU,
      emailU: emailU,
      isAdminU: isAdminU,
    },
    {
      where: {
        id_User: {
          [Op.eq]: id,
        },
      },
    }
  );
};

async function createUser(
  nameU,
  lastNameU,
  passwordU,
  idNumbU,
  emailU,
  phoneU,
  addressU,
  reasonU,
  isAdminU
) {
  const newUser = await Users.create({
    nameU: nameU.slice(0, 1).toUpperCase() + nameU.slice(1).toLowerCase(),
    lastNameU:
      lastNameU.slice(0, 1).toUpperCase() + lastNameU.slice(1).toLowerCase(),
    passwordU: passwordU,
    idNumbU: idNumbU,
    emailU: emailU.toLowerCase(),
    phoneU: phoneU,
    addressU: addressU,
    reasonU: reasonU,
    isAdminU: isAdminU
  });
  return newUser;
}

async function banUser(id) {
  const user = await Users.findByPk(id);
  if (user.is_ban) {
    throw new Error("User already banned");
  }
  user.is_ban = true;
  await user.save();
}

async function unbanUser(id) {
  const user = await Users.findByPk(id);
  if (!user.is_ban) {
    throw new Error("User already unbanned");
  }
  user.is_ban = false;
  await user.save();
}

const forgotPass = async (token,emailU) =>{
  await Users.update({
    resetLink: token
  }, {
    where: {
      emailU: {
        [Op.eq]: emailU,
      }
    }
  })
}

const resetPass = async (passwordU, token) =>{
  await Users.update({
    passwordU: passwordU
  }, {
    where: {
      resetLink: {
        [Op.eq]: token,
      },
    }
  })
}

const getUserBydata = async (data) =>{
    const getByName = await getUserByName(data)
    const getByLastName = await getUserByLastName(data)
    const getByEmail = await getUserByEmail(data)
    const getByDNI = await getUserByDNI(data)

    const users = [...getByName, ...getByLastName, ...getByEmail, ...getByDNI]

    return [...new Set(users)]
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByName,
  getUserByLastName,
  createUser,
  updateUser,
  getUserByEmail,
  forgotPass,
  resetPass,
  banUser,
  unbanUser,
  getUserBydata,
  getEmailLogin,
}

