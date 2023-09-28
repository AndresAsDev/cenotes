// src/CenoteDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CenoteDetail.css';

const cenoteInfo = {
  '00': {
    title: 'Cenotes Santa Barbara',
    imageUrl: 'https://imagenes.descubro.mx/uploads/2022/05/Cenote-Santa-Barbara.jpeg',
    price: '$250mx',
    description: 'Incluye transporte en bicicleta o truck, salvavidas, wifi,  baños, vestidores, regaderas y estacionamiento',
    mapa:"https://www.google.com/maps/d/u/0/embed?mid=1RHxf-qMoU54znCexkkSrGJi7Av6fk8k&ehbc=2E312F&noprof=1",
    location:"Sobre, C. 19 S/N, 97580 Homún, Yuc"
    // ... Otros detalles del cenote 1 ...
  },
  '01': {
    imageUrl: 'URL_de_la_imagen2',
    description: 'Descripción del cenote 2.',
    // ... Otros detalles del cenote 2 ...
  },
  // ... Agrega más cenotes y su información
};

const CenoteDetail = () => {
  const { id } = useParams();
  const cenote = cenoteInfo[id];

  if (!cenote) {
    return <div>Cenote no encontrado.</div>;
  }

  return (
    <div className='container'>
      <div className='info-map-container'>
        <div className='map-container'>
          <iframe src={cenote.mapa} width="320" height="700"></iframe>
        </div>
        <div className='info-container'>
          <h2>Detalles del cenote: {cenote.title}</h2>
          {/* Resto de tu contenido de información */}
          <p>Precio: {cenote.price}</p>
          <p>Descripción: {cenote.description}</p>
          <p>Ubicación: {cenote.location}</p>
          <img src={cenote.imageUrl} width={300}></img>
        </div>
      </div>
    </div>
  );
  
  
  
  
};
export default CenoteDetail;
