// src/components/CenotesPage.js
import React from 'react';
import CenoteCard from './CenoteCard';

const cenotesData = [
  {
    id:'00',
    title: 'Cenotes Santa Barabara',
    description: 'Disfruta de los tres cenotes con lo que contamos.',
    imageUrl: 'https://imagenes.descubro.mx/uploads/2022/05/Cenote-Santa-Barbara.jpeg',
  },
  {
    id:'01',
    title: 'cenote2',
    description: 'Descripción del cenote 2...',
    imageUrl: 'URL_de_la_imagen2'
  },
  // ... Agrega más cenotes según sea necesario ...
];

const Cenotes = () => {
  return (
    <div className="card-container">
      {cenotesData.map((cenote,index) => (
        <CenoteCard
          key={index}
          id={cenote.id}
          title={cenote.title}
          description={cenote.description}
          imageUrl={cenote.imageUrl}
        />
      ))}
    </div>
  );
};

export default Cenotes;