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
      description: "Una agradable pagina donde te mostrara informacion sobre el cuidado de las mascotas.",
      link: "https://wong-mascotas.netlify.app/index.html", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: sweather,
      title: "Sweather App",
      description: "En esta pagina podras saber sobre el estado del clima en tu localidad o ciudad.",
      link: "https://sweather-wong-app.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: morty,
      title: "Rick And Morty",
      description: "Una wiki donde podras ver informacion de cada una de los personajes que han aparecido en esta serie.",
      link: "https://rick-and-morty-wong.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: tienda,
      title: "E-commerce",
      description: "Tienda de ropa con funciones de compra y varios diseños de ropa.",
      link: "https://e-commerce-wong.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: usuarios,
      title: "Users-login",
      description: "Esta pagina usa una base de datos para que al crear un usuario este quede guardado hasta borrarlo.",
      link: "https://login-wong.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: fortuna,
      title: "Fortune",
      description: "Aqui podras probar tu suerte para dia a dia leyendo frases que te daran un aire diferente.",
      link: "https://fortuna-wong.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: pokedex,
      title: "Poke-wong",
      description: "Aqui podras ver todos los pokemones existentes y ver sus atributos asi como abilidades.",
      link: "https://poke-wong.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: air,
      title: "Air-Store",
      description: "Una tienda dedicada a los tenis Air Jordan mostrando algunos de los modelos mas iconicos",
      link: "https://air-store.netlify.app/", // Agrega aquí el enlace correspondiente
    },
    {
      imgSrc: f1,
      title: "F1-Store",
      description: "Articulos exclusivos de la Formula 1",
      link: "https://formula-store.netlify.app/", // Agrega aquí el enlace correspondiente
    },
  ];

  return (
    <div className="portafolio">
      <Container>
        <h2 className="Title-proyectos">Mis Proyectos</h2>

        <div className='texto'>
          <i> Hola estos son todos los proyectos que tengo hasta el momento pero pronto traere aun mas!</i>
        </div>
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
