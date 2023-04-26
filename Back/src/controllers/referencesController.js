const { References, Dogs, dogsReferences } = require('../db')

async function getAllReferences() {
  const allReferences = await References.findAll()
  const allDogsReferences = await dogsReferences.findAll()
  return {allReferences, allDogsReferences}
}

async function createReference(textR, idDog){

        const newReference = await References.create({
          textR: textR.toLowerCase(),
        })
        const dog = await Dogs.findByPk(idDog)
        newReference.addDogs(dog)
        return newReference
}

module.exports = {
  getAllReferences,
  createReference,
}
