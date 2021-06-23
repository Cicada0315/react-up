import React, { useState, useEffect } from 'react';
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
    const [currentPostId, setCurrentPostId] = useState(null);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [currentPostId, dispatch]);

    return (
        <Container>
          <NavBar />
          <Router>
          <Switch>
              <Route exact path="/posts/new" component={(routeinfo) => <Form routeinfo={routeinfo} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />} />
              <Route exact path="/posts/edit" component={() => <Form currentPostId={currentPostId} setCurrentPostId={setCurrentPostId}/>} />
              <Route exact path="/posts" component={() => <Posts setCurrentPostId={setCurrentPostId}/>} />
              <Route path="/about" component={() => <About />} />
              <Route path="/" render={() => <Posts setCurrentPostId={setCurrentPostId}/>} />}
          </Switch>
          </Router>
          <Footer />
        </Container>
    );
};
  
export default App;