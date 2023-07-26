// ContactComponent.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactComponent() {
  return (
    <div className="contact">
      <Container>
        <div className="contact-form">
          <h2 className="contact-heading">Contacto</h2>
          <Row>
            <Col md={6}>
              <Form action="https://formspree.io/f/maygnboy" method="POST"> {/* Configuramos la URL de acción con Formspree */}
                <Form.Group controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Ingresa tu nombre" required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Ingresa tu email" required />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={4} name="message" placeholder="Escribe tu mensaje aquí" required />
                </Form.Group>
                <Button variant="secondary" type="submit" className="contact-btn">
                  Enviar Mensaje
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <div className="contact-info">
                <h3>Información de Contacto</h3>
                <p>
                  Si tienes alguna pregunta o consulta, no dudes en contactarnos. Estamos aquí para ayudarte en lo que
                  necesites.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-envelope"></i> deigamerwong@gmail.com
                  </li>
                  <li>
                    <i className="bi bi-telephone"></i> 5610537417
                  </li>
                  <li>
                    <i className="bi bi-geo-alt"></i> Ciudad De Mexico
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ContactComponent;
