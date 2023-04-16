const { Op } = require("sequelize")
const { Dogs } = require("../db")

async function getAllDogs() {
  const allDogs = await Dogs.findAll()
  return allDogs
}

async function getDogById(id) {
  const dogId = await Dogs.findByPk(id)
  return dogId
}

async function getDogByName(name) {
  const dogsByName = await Dogs.findAll({
    where: {
      nameD: {
        [Op.like]: `%${name}%`,
      },
    },
  })
  return dogsByName
}

async function dogCreate(idDog, nameD, sexD, sizeD, historyD, photoD) {
  const newDog = await Dogs.create({
    idDog: idDog,
    nameD: nameD.toLowerCase(),
    sexD: sexD,
    sizeD: sizeD,
    historyD: historyD,
    photoD: photoD,
  });
  return newDog
}
module.exports = {
  getAllDogs,
  getDogById,
  getDogByName,
  dogCreate,
}
