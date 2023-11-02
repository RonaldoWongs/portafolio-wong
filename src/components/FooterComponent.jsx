import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


function FooterComponent() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p className="rights">All rights reserved © 2023 WongsDeveloper</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
