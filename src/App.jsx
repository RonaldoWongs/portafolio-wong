import './App.css'
import React from 'react';
import Navbar from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import PortafolioComponent from './components/PortafolioComponent';
import SkillBar from './components/SkillBar'
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';



function App() {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <PortafolioComponent />
      <SkillBar />
      <ContactComponent />
      <FooterComponent />
     

    </div>
  );
}

export default App;
