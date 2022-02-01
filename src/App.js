import React from 'react';
import logo from './andrita_logo.svg';
import { Container } from "./components/styles/Container.styled";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavLink} from "react-bootstrap";

const App = () => {
  return (
    <>
     <Navbar bg="warning" variant="light" fixed="bottom" expand="sm">
        <Navbar.Brand>
            <img src={logo} alt=""  />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
                    <Nav>
          <Nav.Link href='#'>About us</Nav.Link>
          <Nav.Link href='#'>Travel</Nav.Link>
          <Nav.Link href='#'>Feedback</Nav.Link>
          <Nav.Link href='#'>Gazetteer</Nav.Link>
          <Nav.Link href='#'>Contact us</Nav.Link>
        </Nav>
        </Navbar.Collapse>

     </Navbar>
       <Container>
          <h1>Hello App</h1>
      </Container>
    </>
  )
}

export default App;
