import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import Posts from './components/Posts/Posts';
import Form from './components/Form/PostForm';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/postsAction';

const App = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
        <NavBar />
        <Form />
        <Posts />
    </Container>
  );
};
  
export default App;