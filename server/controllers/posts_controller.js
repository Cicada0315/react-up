import Post from '../models/post.js';
import mongoose from 'mongoose';

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

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send(`No post with id: ${_id}`);
    }
    const updatedPost = await Post.findByIdAndUpdate(_id, {...post, _id}, { new: true });
    res.json(updatedPost);
}