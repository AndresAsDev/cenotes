// src/components/CenotesPage.js
import React from 'react';
import CenoteCard from './CenoteCard';

const cenotesData = [
  {
    title: 'cenote1',
    description: 'Descripción del cenote 1...',
    imageUrl: 'URL_de_la_imagen1'
  },
  {
    title: 'cenote2',
    description: 'Descripción del cenote 2...',
    imageUrl: 'URL_de_la_imagen2'
  },
  // ... Agrega más cenotes según sea necesario ...
];

const Cenotes = () => {
  return (
    <div className="card-container">
      {cenotesData.map((cenote, index) => (
        <CenoteCard
          key={index}
          title={cenote.title}
          description={cenote.description}
          imageUrl={cenote.imageUrl}
        />
      ))}
    </div>
  );
};

export default Cenotes;