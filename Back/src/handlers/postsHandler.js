const { getAllPosts,
    getPostById,
    getPostByTitle,
    createPost
} = require('../controllers/postsController')

const getAllPostsHandler = async(req, res) => {
    const { titleP } = req.body

    if(titleP){
        try {
            const post = await getPostByTitle(titleP);
            if(post){
                res.status(200).json(post)
            }else{
                return res.status(400).json({
                    message: `Post whit title ${titleP} not found`
                })
            }
        } catch (error) {
            res.status(400).json(error.message)
        }
    }else{
        res.status(200).json(getAllPosts())
    }
};

const getPostByIdHandler = async (req, res) => {
    const { id } = req.params
    try {
        const post = await getPostById(id)
        if(post){
            res.status(200).json(post)
        }else{
            return res.status(400).json({message: `Post not found`})
        }
    } catch (error) {
        res.status(500).json({message: `Error trying to find the postID`})
    }
}

const createPostHandler = async (req, res) =>{
    const { titleP, commentP, category } = req.body
    
    try {
        if(!titleP || !commentP || !category){
            return res.status(400).send(`You must complete all fields 😅`)
        }else{
            await createPost(titleP, commentP, category)
            res.status(200).send(`Post ${titleP} created successfully`)
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    getAllPostsHandler,
    getPostByIdHandler,
    createPostHandler,
}