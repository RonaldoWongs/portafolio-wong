import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function SkillImage({ image, altText }) {
  return (
    <div className="skill-image">
      <img src={image} alt={altText} />
      <div className="skill-text">{altText}</div>
    </div>
  );
}

function SkillsComponent() {
  const skillsData = [
    { image: 'https://cdn.worldvectorlogo.com/logos/css-3.svg', text: 'CSS' },
    { image: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png', text: 'HTML' },
    { image: 'https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2020/06/09140550/React-logo.png', text: 'React' },
    { image: 'https://static.vecteezy.com/system/resources/previews/012/697/297/original/3d-bootstrap-programming-framework-logo-free-png.png', text: 'Bootstrap' },
    { image: 'https://cms.rootstack.com/sites/default/files/inline-images/javascript%20logo.png', text: 'JavaScript' },
  ];

  return (
    <div className="skills">
      <Container>
        <h2 className='skills-title'>Habilidades Técnicas</h2>

        <div className='texto-skills'>
          <i>Estas son todas las tecnologias que se usar hasta el momento pero sin duda a futuro habra mas!!</i>
        </div>

        <Row>
          {skillsData.map((skill, index) => (
            <Col md={3} key={index}>
              <SkillImage image={skill.image} altText={skill.text} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SkillsComponent;
