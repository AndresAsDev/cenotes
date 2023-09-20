// src/CenoteDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const cenoteInfo = {
  cenote1: {
    imageUrl: 'URL_de_la_imagen1',
    description: 'Descripción del cenote 1.',
    // ... Otros detalles del cenote 1 ...
  },
  cenote2: {
    imageUrl: 'URL_de_la_imagen2',
    description: 'Descripción del cenote 2.',
    // ... Otros detalles del cenote 2 ...
  },
  // ... Agrega más cenotes y su información
};

const CenoteDetail = () => {
  const { title } = useParams();
  const cenote = cenoteInfo[title];

  if (!cenote) {
    return <div>Cenote no encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalles del cenote: {title}</h2>
      <img src={cenote.imageUrl} alt={title} />
      <p>Precio: {cenote.price}</p>
      <p>Descripción: {cenote.description}</p>
      <p>Ubicación: {cenote.location}</p>
      {/* Otros detalles de la cabina */}
    </div>
  );
};
export default CenoteDetail;
