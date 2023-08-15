import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Typical from 'react-typical';
import koba from '../../img/koba2.png';


function HeroComponent() {
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  return (
    <div className="hero">

      <Container>
        <Row>
          <Col md={6} className="text-column">
            {textAnimationComplete ? (
              <>
              </>
            ) : (
              <>
                <h1>
                  <Typical
                    steps={['Bienvenido!!', 5000]}
                    loop={1}
                    onTypingDone={() => setTextAnimationComplete(true)}
                    wrapper="span"
                  />
                </h1>
                <p>
                  <Typical
                    steps={[
                      'Soy Ronaldo, un desarrollador web apasionado por crear soluciones creativas y eficientes, aqui podras ver todos mis proyectos y saber a cerca de las tecnologias que se usar.',
                      5000,
                    ]}
                    loop={1}
                    wrapper="span"
                  />
                </p>
                <div className="button-container">
                  <button className="btn btn-dark btn-ver-mas">Ver Más</button>
                </div>
              </>
            )}
          </Col>
          <Col md={6} className="image-column">
            <img
              src={koba}
              alt="Imagen del Hero"
              className="img-fluid img-large"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroComponent;
