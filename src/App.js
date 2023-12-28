import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Trabajo from './pages/Trabajo';
import Estudio from './pages/Estudio';
import SobreMi from './pages/SobreMi';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import LanguageSelector from './components/LanguageSelector';

function App() {
  return (
    <Router>
      <LanguageSelector />
      
      
      <Routes>
        <Route path="/trabajo" element={<Trabajo />} />
        <Route path="/estudio" element={<Estudio />} />
        <Route path="/sobremi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;