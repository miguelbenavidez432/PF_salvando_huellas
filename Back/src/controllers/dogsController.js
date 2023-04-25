const { Op } = require("sequelize");
const { Dogs, References, dogsReferences } = require("../db");

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
    throw new Error("Sex must be either 'male' or 'female'");
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

async function dogCreate(nameD, sexD, sizeD, historyD, photoD, ageD, userId, references) {
  const newDog = await Dogs.create({
    nameD: nameD,
    sexD: sexD.toLowerCase(),
    ageD: ageD.toLowerCase(),
    sizeD: sizeD.toLowerCase(),
    historyD: historyD,
    photoD: photoD,
    userId: userId
  });
  await references.forEach(async(ref) => {
    const reference = await References.findOne({where: {textR: ref}})
    await newDog.addReferences(reference)
  });
  return newDog;
}

async function dogUpdate(nameD, sexD, sizeD, historyD, photoD, ageD, id, references) {
  const updatedDog = await Dogs.update(
    {
      nameD: nameD,
      sexD: sexD,
      sizeD: sizeD,
      historyD: historyD,
      photoD: photoD,
      ageD: ageD,
    },

    {
      where: {
        id_Dog: {
          [Op.eq]: id,
        },
      },
    }
  );
  const dog = await Dogs.findByPk(id)
  const relations = await dogsReferences.findAll({where: {dogIdDog: id}})
  await references.forEach(async(ref) => {
    let alreadyIs = false
    const foundRef = await References.findOne({where: {textR: ref}})
    await relations.forEach(async(rel) => {
      if (foundRef.id_Reference === rel.referenceIdReference){
        alreadyIs = true
      }
      const checkRef = await References.findByPk(rel.referenceIdReference)
      if (!references.includes(checkRef.textR)){
        await dog.removeReferences(checkRef)
      }
    })
    if(!alreadyIs){
      await dog.addReferences(foundRef)
    }
  })
  
  return updatedDog;
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

async function dogDisable(id) {
  const dog = await Dogs.findByPk(id);
  dog.is_disabled = true;
  await dog.save();
}

async function dogEnable(id) {
  const dog = await Dogs.findByPk(id);
  dog.is_disabled = false;
  await dog.save();
}

module.exports = {
  getAllDogs,
  getDogs,
  getDogById,
  dogCreate,
  dogDelete,
  dogDisable,
  dogEnable,
  dogUpdate,
};
