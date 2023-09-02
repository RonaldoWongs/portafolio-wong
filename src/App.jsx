import './App.css'
import React from 'react';
import Navbar from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import PortafolioComponent from './components/PortafolioComponent';
import SkillBar from './components/SkillBar';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';
import LoaderComponent from './components/LoaderComponent'; // Importa el componente LoaderComponent

function App() {
  // Simula un tiempo de carga antes de mostrar el contenido
  // En tu caso, esto debería ser reemplazado por el contenido real
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simula una carga de 3 segundos antes de mostrar el contenido
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <>
          <Navbar />
        
          <PortafolioComponent />
      
          <ContactComponent />
          <FooterComponent />
        </>
      )}
    </div>
  );
}

export default App;
