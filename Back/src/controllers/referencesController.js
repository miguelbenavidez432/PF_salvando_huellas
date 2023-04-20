const { References } = require('../db')

async function getAllReferences() {
  const allReferences = await References.findAll()
  return allReferences
}

async function createReference(textR){

        const newReference = await References.create({
          textR: textR.toLowerCase(),
        })
        return newReference
}

module.exports = {
  getAllReferences,
  createReference,
}
