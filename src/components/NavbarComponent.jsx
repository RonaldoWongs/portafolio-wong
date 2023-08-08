import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

function CustomNavbar() {
  const [navbarFixed, setNavbarFixed] = useState(false);

  // Agregar un event listener para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Obtener la posición actual del scroll
      const scrollY = window.scrollY;
      // Establecer el estado de navbarFixed en true si el scroll es mayor a 100px, de lo contrario, en false.
      setNavbarFixed(scrollY > 100);
    };

    // Agregar el event listener al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener al desmontar el componente para evitar fugas de memoria
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      style={navbarFixed ? { backgroundColor: 'black', transition: 'background-color 0.3s ease' } : {}}
      className={navbarFixed ? 'fixed-top' : ''}
    >
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
