import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    return (
        <div>
            {posts.map(p=><Post key={p._id} post={p}/>)}
        </div>
    );
};
  
export default Posts;