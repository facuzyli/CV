import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector';
import Menu from './components/Menu';
import Trabajo from './pages/Trabajo';
import Estudio from './pages/Estudio';
import SobreMi from './pages/SobreMi';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div>
      <LanguageSelector />
      
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/trabajo" element={<Trabajo />} />
        <Route path="/estudio" element={<Estudio />} />
        <Route path="/sobremi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Asegúrate de tener una ruta para la página de inicio */}
        {/* <Route path="/" element={<Inicio />} /> */}
      </Routes>
    </div>
  );
}

export default App;
