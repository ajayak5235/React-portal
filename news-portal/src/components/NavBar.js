import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './NavBar.css'
const NavBar = () => {
  return (
    <Navbar  expand="lg" fixed="top" className='navBar'>
      <Navbar.Brand href="#home" style={{marginLeft:"50px" , fontWeight:'bold' , color:'white'}}>React News Portal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link href="#home" style={{color:'white'}}>Home</Nav.Link>
          <Nav.Link href="#link"style={{color:'white'}}>Categories</Nav.Link>
          <Nav.Link href="#link"style={{color:'white'}}>About</Nav.Link>
          <Nav.Link href="#link"style={{color:'white'}}>Contact</Nav.Link>
          <Button variant="success">Login</Button>
       
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;



