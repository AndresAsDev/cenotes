// src/components/Cabinas.js
import React from 'react';
import CabinaCard from './CabinaCard';

const cabinasData = [
  {
    id:'00',
    title: 'Cabañas Santa Cruz',
    description: 'Contamos con distintos tipos de hospedaje de acuerdo a tus necesidades',
    imageUrl: 'https://images.trvl-media.com/lodging/40000000/39190000/39189600/39189550/d4787e8a.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium'
  },
  {
    id:'01',
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
          id={cabina.id}
          title={cabina.title}
          description={cabina.description}
          imageUrl={cabina.imageUrl}
        />
      ))}
    </div>
  );
};

export default Cabinas;
