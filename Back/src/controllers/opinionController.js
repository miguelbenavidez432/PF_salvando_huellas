const { Opinions } = require("../db");

async function createOpinion(idOpinion, commentO, qualificationO) {
  const newOpinion = await Opinions.create({
    idOpinion: idOpinion,
    commentO: commentO,
    qualificationO: qualificationO,
  });
  return newOpinion;
}

async function getOpinions() {
  const allOpinions = await Opinions.findAll();
  return allOpinions;
}

module.exports = {
  createOpinion,
  getOpinions,
};
