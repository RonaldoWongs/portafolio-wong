import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Navbar.Collapse id="navbar-nav" className="justify-content-between">
        <Nav className="button-container-left">
          {/* Cambiamos la ruta en el atributo href */}
          <Button variant="dark" className="btn btn-download" href="/ruta_de_tu_curriculum" target="_blank">
            Curriculum
          </Button>
        </Nav>
        <Nav className="button-container-right">
          <Nav.Link href="https://www.instagram.com/ronaldowongs/" target="_blank">
            <i className="bx bxl-instagram"></i>
          </Nav.Link>
          <Nav.Link href="https://www.facebook.com/ronaldo.wm.73/" target="_blank">
            <i className="bx bxl-facebook-circle"></i>
          </Nav.Link>
          <Nav.Link href="https://github.com/RonaldoWongs" target="_blank">
            <i className="bx bxl-github"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
