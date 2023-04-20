const {
  getAllArticles,
  getArticleById,
  getArticleByName,
  createArticle,
  deleteArticle,
  updateArticle,
  getArticleOpinion,
} = require('../controllers/articlesController')

// Function: obtains an article by name according to parameter, if there is no parameter it obtains all the articles
const getAllArticlesHandler = async (req, res) => {
  const { nameA } = req.query
  if (nameA) {
    try {
      const article = await getArticleByName(nameA.toLowerCase());
      if (article) {
        res.status(200).json(article)
      } else {
        return res.status(400).json({
          message: `Article ${nameA} not found`
        })
      }
    } catch (error) {
      res.status(400).json(error.message)
    }
  } else {
    res.status(200).json(await getAllArticles())
  }
}

// Function: get an article according to the id
const getArticleByIdHandler = async (req, res) => {
  const { id } = req.params
  try {
    const article = await getArticleById(id)
    if (article) {
      res.status(200).json(article)
    } else {
      return res.status(500).json({ message: `Article not found` })
    }
  } catch (error) {
    res.status(400).json({ message: `Error trying to find the articleID` })
  }
}

// Function: Create an article
const createArticleHandler = async (req, res) => {
  const {
    nameA,
    priceA,
    descriptionA,
    photoA,
    stockA,
    activeA
  } = req.body
  try {
    if (!nameA || !priceA || !descriptionA || !stockA) {
      return res.status(400).send(`You must complete all fields 😅`)
    } else {
      await createArticle(nameA, priceA, descriptionA, photoA, stockA, activeA)
      res.status(200).send(`Article ${nameA} created successfully`)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Function: update an article specified by id
const updateArticleHandler = async (req, res) => {
  const { nameA, priceA, descriptionA, stockA, photoA, activeA } = req.body
  const { id } = req.params
  try {
    const getArticle = await getArticleById(id)
    if (getArticle) {
      await updateArticle(id, nameA, priceA, descriptionA, photoA, stockA, activeA)
      res.status(200).send(`Article ${nameA} updated`)
    } else {
      return res.status(500).json({ message: `article ${nameA} not found` })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Function: delete(active:false) an article according to the id
const deleteArticleHandler = async (req, res) => {
  const { id } = req.params
  const { activeA } = req.body
  try {
    const getArticle = await getArticleById(id)
    if (getArticle) {
      await deleteArticle(id, activeA)
      res.status(200).send(`Article ${getArticle.nameA} delete`)
    } else {
      return res.status(500).json({ message: `Article ${getArticle.nameA} not found` })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getArticleOpinionHandler = async(req, res) =>{
  getArticleOpinion()
}

module.exports = {
  getAllArticlesHandler,
  getArticleByIdHandler,
  createArticleHandler,
  updateArticleHandler,
  deleteArticleHandler,
  getArticleOpinionHandler,
}