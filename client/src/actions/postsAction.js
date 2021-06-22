import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
        const res = await api.fetchPosts();
        console.log(res)
        dispatch({ type: 'FETCH_POSTS', payload: res.data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const res = await api.createPost(post);
  
        dispatch({ type: 'CREATE_POST', payload: res.data });
    } catch (error) {
        console.log(error.message);
    }
};