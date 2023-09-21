// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Cenotes from './Cenotes';  // Cambiado a Cenotes
import Restaurantes from './Restaurantes';
import CabinasPage from './Cabinas';
import CenoteDetail from './CenoteDetail';
import RestauranteDetail from './RestauranteDetail';
import CabinaDetail from './CabinaDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/cenotes" element={<Cenotes />} />
            <Route path="/cenotes/:id" element={<CenoteDetail />} />
            <Route path="/restaurantes" element={<Restaurantes />} />
            <Route path="/restaurantes/:title" element={<RestauranteDetail />} />

            <Route path="/cabinas" element={<CabinasPage />} />
            <Route path="/cabinas/:title" element={<CabinaDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
