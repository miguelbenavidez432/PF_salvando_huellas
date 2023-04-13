const { Op } = require("sequelize");
const { Dogs } = require('../db');

async function getAllDogs() {
  const allDogs = await Dogs.findAll();
  return allDogs;
}

async function getDogsById(id) {
  const dog = await Dogs.findByPk(id);
  return dog;
}

async function getDogsByName(name) {
  const dogsByName = await Dogs.findAll({
    where: {
      nameD: {
        [Op.like]: `%${name}%`,
      },
    },
  });
  return dogsByName;
}

module.exports = {
  getAllDogs,
  getDogsById,
  getDogsByName,
};
