import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import mascotas from '../../img/mascotas.png';
import morty from '../../img/morty.png';
import sweather from '../../img/sweather.png';
import tienda from '../../img/tienda.png';
import usuarios from '../../img/usuarios.png';
import fortuna from '../../img/fortuna.png';
import pokedex from '../../img/pokedex.png';
import air from '../../img/air.png';
import f1 from '../../img/f1.png';


function ProjectItem({ imgSrc, title, description, link }) {
  return (
    <div className="project">
      <div className="image-container">
        <img src={imgSrc} alt={title} className="img-fluid" />
        <div className="overlay-container">
          <div className="button-container">
            {/* Cambiamos el enlace <a> por el botón <button> */}
            <button className="btn btn-primary btn-animated" onClick={() => window.open(link, '_blank')}>
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function PortafolioComponent() {
  const projects = [
    {
      imgSrc: mascotas,
      title: "WongMascotas",
      description: "A nice page where it will show you information about pet care.",
      link: "https://wong-mascotas.netlify.app/index.html", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: sweather,
      title: "Sweather App",
      description: "On this page you can find out about the weather in your town or city.",
      link: "https://sweather-wong-app.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: morty,
      title: "Rick And Morty",
      description: "A wiki where you can see information about each of the characters that have appeared in this series.",
      link: "https://rick-and-morty-wong.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: tienda,
      title: "E-commerce",
      description: "Clothing store with shopping functions and various clothing designs.",
      link: "https://e-commerce-wong.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: usuarios,
      title: "Users-login",
      description: "This page uses a database so that when a user is created it is saved until it is deleted.",
      link: "https://login-wong.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: fortuna,
      title: "Fortune",
      description: "Here you can try your luck for day to day reading phrases that will give you a different air.",
      link: "https://fortuna-wong.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: pokedex,
      title: "Poke-wong",
      description: "Here you can see all the existing pokemons and see their attributes as well as abilities.",
      link: "https://poke-wong.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: air,
      title: "Air-Store",
      description: "A store dedicated to Air Jordan sneakers showing some of the most iconic models.",
      link: "https://air-store.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: f1,
      title: "F1-Store",
      description: "Exclusive articles of Formula 1",
      link: "https://formula-store.netlify.app/", // Agrega aquí el enlace correspondiente
    },
  ];

  return (
    <div className="portafolio">
      <Container>
       

       
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <ProjectItem
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                link={project.link} // Pasamos el enlace del proyecto como prop
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default PortafolioComponent;
