// src/components/Cabinas.js
import React from 'react';
import CabinaCard from './CabinaCard';

const cabinasData = [
  {
    title: 'cabina1',
    description: 'Descripción de la cabina 1...',
    imageUrl: 'URL_de_la_imagen1'
  },
  {
    title: 'cabina2',
    description: 'Descripción de la cabina 2...',
    imageUrl: 'URL_de_la_imagen2'
  },
  // ... Agrega más cabinas según sea necesario ...
];

const Cabinas = () => {
  return (
    <div className="card-container">
      {cabinasData.map((cabina, index) => (
        <CabinaCard
          key={index}
          title={cabina.title}
          description={cabina.description}
          imageUrl={cabina.imageUrl}
        />
      ))}
    </div>
  );
};

export default Cabinas;
