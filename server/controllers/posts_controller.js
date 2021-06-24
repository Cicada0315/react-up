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
    const post = req.body;
    const newPost = new Post({ ...post, creator: req.userId, createdAt: new Date().toISOString() })
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

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);
    await Post.findByIdAndRemove(_id);
    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id: _id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Not allowed" });
    }

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);
    //getting post
    const post = await Post.findById(_id);
    const index = post.likes.findIndex((_id) => _id ===String(req.userId));

    if (index === -1) {
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter((_id) => _id !== String(req.userId));
    }
    const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
    res.status(200).json(updatedPost);
}