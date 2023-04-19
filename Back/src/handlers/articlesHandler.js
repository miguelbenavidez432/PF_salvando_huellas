const {
  getAllArticles,
  getArticleById,
  getArticleByName,
  createArticle,
  deleteArticle,
  updateArticle,
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
  const { nameA } = req.body
  try {
    const article = await getArticleByName(nameA.toLowerCase())
    if (article) {
      res.status(200).json(article)
    } else {
      return res.status(500).json({ message: `article ${nameA} not found` })
    }
  } catch (error) {
    res.status(400).json({ message: `Error trying to find the article ${nameA}` })
  }
}

const createArticleHandler = async (req, res) => {
  try {
    const {
      nameA,
      priceA,
      descriptionA,
      photoA,
      stockA
    } = req.body

    if (!nameA || !priceA || !descriptionA || !stockA) {
      return res.status(400).send(`You must complete all fields 😅`)
    } else {
      await createArticle(nameA, priceA, descriptionA, photoA, stockA)
      res.status(200).send(`Article ${nameA} created successfully`)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const deleteArticleHandler = async (req, res) => {
  const { id } = req.params

  try {
    const getArticle = await getArticleById(id)
    if(getArticle){
      await deleteArticle(id)
      res.status(200).send(`Article ${getArticle.id_Article} delete`)
    }else{
      return res.status(500).json({ message: `article ${getArticle.id_Article} not found` })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const updateArticleHandler = async (req, res) => {
  const { nameA, priceA, descriptionA, stockA, photoA } = req.body
  const { id } = req.params

  try {
    const getArticle = await getArticleById(id)
    if(getArticle){
      await updateArticle(id, nameA, priceA, descriptionA, photoA, stockA)
      res.status(200).send(`Article ${nameA} updated`)
    }else{
      return res.status(500).json({ message: `article ${nameA} not found` })
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
  deleteArticleHandler,
  updateArticleHandler,
}