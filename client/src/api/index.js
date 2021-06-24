import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('userinfo')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('userinfo')).token}`;
  }
  return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (post) => API.post('/posts', post);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (inputs) => API.post('/user/signin', inputs);
export const signUp = (inputs) => API.post('/user/signup', inputs);