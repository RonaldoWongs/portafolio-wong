import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


function SkillBar({ percentage }) {
  return (
    <div className="skill-bar">
      <div className="fill" style={{ width: `${percentage}%` }}>
        <div className="percentage-text">{percentage}%</div>
      </div>
    </div>
  );
}

function SkillsComponent() {
  const skillsData = [
    {
      image: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
      percentage: 75,
    },
    {
      image: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png',
      percentage: 65,
    },
    {
      image: 'https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2020/06/09140550/React-logo.png',
      percentage: 55,
    },
    {
      image: 'https://static.vecteezy.com/system/resources/previews/012/697/297/original/3d-bootstrap-programming-framework-logo-free-png.png',
      percentage: 55,
    },
  ];

  return (
    <div className="skills">
      
      <Container>
        <h2 className='skills-title'>Habilidades Técnicas</h2>
        <Row>
          {skillsData.map((skill, index) => (
            <Col md={3} key={index}>
              <div className="skill-image">
                <img src={skill.image} alt={`Habilidad ${index + 1}`} />
                <div className="skill-bars">
                  <SkillBar percentage={skill.percentage} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SkillsComponent;
