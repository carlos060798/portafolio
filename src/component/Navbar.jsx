import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Menu = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  const icon = isDarkMode ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-brightness-high"></i>;

  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className='justify-content-center text-center'>
          <Nav >
            <Nav.Link as={Link} to="/" className="nav-link">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              Acerca de
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link">
              Proyectos
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              <Button variant="outline-primary" className="rounded-circle me-2">
                <i className="bi bi-envelope"></i>
              </Button>
            </Nav.Link>
            <Nav.Link  as={Link}  className="nav-link">
              <Button variant="outline-primary" className="rounded-circle" onClick={handleDarkModeToggle}>
                {icon}
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;


