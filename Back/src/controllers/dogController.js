const axios = require("axios");
const { Op } = require("sequelize");
const { dogs } = require("../models");

async function getAllDogs() {
  const allDogs = await dogs.findAll();
  return allDogs;
}

async function getDogsById(id) {
  const dog = await dogs.findByPk(id);
  return dog;
}

async function getDogsByName(name) {
  const dogsByName = await dogs.findAll({
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
