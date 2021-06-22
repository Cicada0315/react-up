import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    creator: String,
    files: String,
    views: {
        type: Number,
        default: 0,
    },
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const Post = mongoose.model('Post', postSchema);

export default Post;