import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar as NavbarB} from "react-bootstrap";
import logo from '../andrita_logo.svg';
import {LinkContainer} from 'react-router-bootstrap'

const Navbar = () =>{
  return (
      <NavbarB bg="warning" variant="light" fixed="bottom" expand="sm">
      <LinkContainer to="/">
        <NavbarB.Brand>
            <img src={logo} alt=""  />
        </NavbarB.Brand>
      </LinkContainer>
        

        <NavbarB.Toggle />
        <NavbarB.Collapse>
          <Nav className="mr-auto">
            <LinkContainer to="/about-us">
                <Nav.Link>About</Nav.Link>
            </LinkContainer> 
             <LinkContainer to="/travel">
                <Nav.Link>Travel</Nav.Link>
            </LinkContainer> 
             <LinkContainer to="/feedback">
                <Nav.Link>Feedback</Nav.Link>
            </LinkContainer> 
             <LinkContainer to="/gazetteer">
                <Nav.Link>Gazetteer</Nav.Link>
            </LinkContainer> 
             <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
            </LinkContainer> 
         </Nav>
        </NavbarB.Collapse>
     </NavbarB>
    );
}

export default Navbar;