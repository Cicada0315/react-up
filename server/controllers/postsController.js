
import Post from '../models/post.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const post = await Post.find();
                
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, content, creator, files } = req.body;
    const newPost = new Post({ title, content, creator, files })
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}