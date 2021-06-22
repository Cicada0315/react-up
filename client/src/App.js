import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import { Container } from 'react-bootstrap';
import Posts from './components/Posts/Posts';
import Form from './components/Form/PostForm';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/postsAction';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
      <NavBar />
      <Router>
      <Switch>
        <Route exact path="/posts/new" component={() => <Form />} />
        <Route exact path="/posts" component={() => <Posts />} />
        <Route path="/about" component={() => <About />} />
        <Route path="/" render={() => <Posts />} />
      </Switch>
      </Router>
      <Footer />
    </Container>
  );
};
  
export default App;