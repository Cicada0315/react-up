import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import logo from './images/Logo.png';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const NavBar=()=>{
    const [user, setUser]=useState(JSON.parse(localStorage.getItem('userinfo')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const logout=(e)=>{
        dispatch({type: 'LOGOUT'});
        history.push('/auth');
        setUser(null);
    }

    useEffect(() => {
        if(user){
            if(user.token){
                const decodedToken = decode(user.token);
                if (decodedToken.exp * 1000 < new Date().getTime()){
                    logout();
                } 
            }
        }
        setUser(JSON.parse(localStorage.getItem('userinfo')));
    }, [location]);

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src={logo} width="30" height="30" alt="logo"/> UP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/about">AboutUps</Nav.Link>
                <Nav.Link href="/posts">AllUps</Nav.Link>
                {!user?(<><Nav.Link href="/auth"><Button variant="primary">Sign In</Button></Nav.Link></>):
                    (<><Nav.Link href="/posts/new">CreateUp</Nav.Link>
                    <Button onClick={logout} variant="primary">Sign Out</Button></>)
                }
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar