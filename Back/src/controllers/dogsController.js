const { Op } = require("sequelize");
const { Dogs } = require("../db");

// Esta función se encarga de obtener todos los perros en la base de datos que coincidan con ciertas condiciones, como el nombre, tamaño y género. Si no se especifican condiciones, esta función devolverá todos los perros.
async function getDogs({ age, size, sex }) {
  try {
    if (age || size || sex) {
      let queryByFilter = createQueryByFilter(age, size, sex);
      return await getDogsByQuery(queryByFilter);
    } else {
      const allDogs = await getAllDogs();
      return allDogs;
    }
  } catch (error) {
    console.error("message", error.message);
  }
}

// Esta función se utiliza para crear la consulta de base de datos a partir de las condiciones especificadas en la función getDogs.
function createQueryByFilter(age, size, sex) {
  if (sex && sex !== "male" && sex !== "female") {
    throw new Error("Sex parameter must be either 'male' or 'female'");
  }
  const whereCondition = {
    //Devolver lo que de todas las condiciones den true
    [Op.and]: [
      size
        ? {
            sizeD: {
              [Op.iLike]: `%${size}%`,
            },
          }
        : {},

      sex
        ? {
            sexD: {
              [Op.iLike]: sex,
            },
          }
        : {},

      age
        ? {
            ageD: {
              [Op.iLike]: `%${age}%`,
            },
          }
        : {},
    ],
  };
  return whereCondition;
}

async function getDogsByQuery(query) {
  return await Dogs.findAll({ where: query });
}

async function getAllDogs() {
  const allDogs = await Dogs.findAll();

  return allDogs;
}

async function getDogById(id) {
  const dogId = await Dogs.findByPk(id);
  return dogId;
}

async function dogCreate(nameD, sexD, sizeD, historyD, photoD, ageD) {
  const newDog = await Dogs.create({
    nameD: nameD.toLowerCase(),
    sexD: sexD.toLowerCase(),
    ageD: ageD.toLowerCase(),
    sizeD: sizeD.toLowerCase(),
    historyD: historyD,
    photoD: photoD,
  });
  return newDog;
}

async function dogDelete(id) {
  await Dogs.destroy({
    where: {
      id_Dog: {
        [Op.eq]: id,
      },
    },
  });
}

module.exports = {
  getAllDogs,
  getDogs,
  getDogById,
  dogCreate,
  dogDelete,
};
