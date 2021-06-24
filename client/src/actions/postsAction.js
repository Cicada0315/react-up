import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
        const res = await api.fetchPosts();
        dispatch({ type: 'FETCH_POSTS', payload: res.data });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const res = await api.createPost(post);
  
        dispatch({ type: 'CREATE_POST', payload: res.data });
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const res = await api.updatePost(id, post);
    
        dispatch({ type: 'UPDATE_POST', payload: res.data });
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: 'DELETE_POST', payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        const res = await api.likePost(id);
        dispatch({ type: 'LIKE_POST', payload: res.data });
    } catch (error) {
        console.log(error);
    }
};