import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


function FooterComponent() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p className="rights">Derechos Reservados © 2023 Wong</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
