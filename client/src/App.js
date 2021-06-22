import React from 'react';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

const App = () => {
    return (
      <Container>
          <NavBar />
          <Form />
          <Posts />
      </Container>
    );
  };
  
  export default App;