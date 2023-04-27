const {
  getAllPosts,
  getPostById,
  getPostByTitle,
  createPost,
  deletePost,
  updatePost,
} = require('../controllers/postsController')

const getAllPostsHandler = async (req, res) => {
  const { titleP } = req.query

  if (titleP) {
    try {
      const post = await getPostByTitle(titleP.toLowerCase());
      if (post) {
        res.status(200).json(post)
      } else {
        return res.status(400).json({
          message: `Post whit title ${titleP} not found`
        })
      }
    } catch (error) {
      res.status(400).json(error.message)
    }
  } else {
    res.status(200).json(await getAllPosts())
  }
};

const getPostByIdHandler = async (req, res) => {
  const { id } = req.params
  try {
    const post = await getPostById(id)
    if (post) {
      res.status(200).json(post)
    } else {
      return res.status(400).json({ message: `Post not found` })
    }
  } catch (error) {
    res.status(500).json({ message: `Error trying to find the postID` })
  }
}

const createPostHandler = async (req, res) => {
  const { titleP, commentP, category, photoP, userId } = req.body

  try {
    if (!titleP || !commentP || !category) {
      return res.status(400).send(`You must complete all fields 😅`)
    } else {
      await createPost(titleP, commentP, category, photoP, userId)
      res.status(200).send(`Post "${titleP}" creado con éxito`)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const deletePostHandler = async (req, res) => {
  const { id } = req.params

  try {
    const getPost = await getPostById(id)
    if (getPost) {
      await deletePost(id)
      res.status(200).send(`Post ${getPost.titleP} delete`)
    } else {
      return res.status(500).json({ message: `Post ${getPost.titleP} not found` })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const updatPostHandler = async (req, res) => {
  const { titleP, commentP, category, photoP } = req.body
  const { id } = req.params

  try {
    const getPost = await getPostById(id)
    if (getPost) {
      await updatePost(id, titleP, commentP, category, photoP)
      res.status(200).send(`Post ${titleP} updated`)
    } else {
      return res.status(500).json({ message: `Post whit title ${titleP} not found` })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}


module.exports = {
  getAllPostsHandler,
  getPostByIdHandler,
  createPostHandler,
  updatPostHandler,
  deletePostHandler
}

