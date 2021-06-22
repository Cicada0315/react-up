import React from 'react'
import logo from '../images/Logo.png';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './NavBar.css';

const NavBar=()=>{
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><img src={logo} width="30" height="30" alt="logo"/> UP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/about">AboutUps</Nav.Link>
                <Nav.Link href="/posts">AllUps</Nav.Link>
                <Nav.Link href="/posts/new">CreateUp</Nav.Link>
                <Nav.Link href="/login"><Button className="buttons" variant="primary">Log In</Button></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar