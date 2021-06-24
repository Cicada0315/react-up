import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    name: String,
    creator: String,
    files: String,
    views: {
        type: Number,
        default: 0,
    },
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const Post = mongoose.model('Post', postSchema);

export default Post;