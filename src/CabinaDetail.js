// src/CabinaDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const cabinaInfo = {
  cabina1: {
    imageUrl: 'URL_de_la_imagen1',
    price: '$$',
    description: 'Descripción de la cabina 1.',
    location: 'Ubicación de la cabina 1',
  },
  cabina2: {
    imageUrl: 'URL_de_la_imagen2',
    price: '$$$',
    description: 'Descripción de la cabina 2.',
    location: 'Ubicación de la cabina 2',
  },
  // ... Agrega más cabinas y su información
};

const CabinaDetail = () => {
  const { title } = useParams();
  const cabina = cabinaInfo[title];

  if (!cabina) {
    return <div>Cabina no encontrada.</div>;
  }

  return (
    <div>
      <h2>Detalles de la cabina: {title}</h2>
      <img src={cabina.imageUrl} alt={title} />
      <p>Precio: {cabina.price}</p>
      <p>Descripción: {cabina.description}</p>
      <p>Ubicación: {cabina.location}</p>
      {/* Otros detalles de la cabina */}
    </div>
  );
};

export default CabinaDetail;
