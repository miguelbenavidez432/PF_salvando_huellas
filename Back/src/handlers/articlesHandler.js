const {
  getAllArticles,
  getArticleById,
  getArticleByName,
  createArticle,
} = require('../controllers/articlesController')

const getAllArticlesHandler = async (req, res, next) => {
  const { name } = req.query
  if (req.query.name) return next()
  try {
    const allArticles = await getAllArticles();
    res.status(200).json(allArticles)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

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

const getArticleByNameHandler = async (req, res) => {
  const { name } = req.body
  try {
    const article = await getArticleByName(name.toLowerCase())
    if (article) {
      res.status(200).json(article)
    } else {
      return res.status(500).json({ message: `article ${name} not found` })
    }
  } catch (error) {
    res.status(400).json({ message: `Error trying to find the article ${name}` })
  }
}

const createArticleHandler = async (req, res) => {
  try {
    const {
      nameA,
      priceA,
      descriptionA,
      photoA,
    } = req.body

    if (!nameA || !priceA || !descriptionA || !photoA) {
      return res.status(400).send(`You must complete all fields 😅`)
    } else {
      await createArticle(nameA, priceA, descriptionA, photoA)
      res.status(200).send(`Article ${nameA} created successfully`)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  getAllArticlesHandler,
  getArticleByIdHandler,
  getArticleByNameHandler,
  createArticleHandler,
}