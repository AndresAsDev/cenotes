// src/CabinaDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CabinaDetail.css'

const cabinaInfo = {
  '00': {
    title:'',
    imageUrl: 'https://images.trvl-media.com/lodging/40000000/39190000/39189600/39189550/4cf79e88.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium',
    price: 'Desde $600 a $2500 mxn por noche',
    description: 'Pagando el hospedaje incluye acceso a los 2 cenotes, área de piscina, estacionamiento, chalecos salvavidas.',
    location: 'Ubicación de la cabina 1',
  },
  '01': {
    title: '',
    imageUrl: 'URL_de_la_imagen2',
    price: '$$$',
    description: 'Descripción de la cabina 2.',
    location: 'Ubicación de la cabina 2',
  },
  // ... Agrega más cabinas y su información
};

const CabinaDetail = () => {
  const { id } = useParams();
  const cabina = cabinaInfo[id];

  if (!cabina) {
    return <div>Cabaña no encontrada.</div>;
  }

  return (
    <div className='container'>
      <div className='info-container'>
      <h2>Detalles de la cabaña: {cabina.title}</h2>
      <img src={cabina.imageUrl} alt={cabina.title} />
      <p>Precio: {cabina.price}</p>
      <p>Descripción: {cabina.description}</p>
      <p>Ubicación: {cabina.location}</p>
      {/* Otros detalles de la cabina */}
      </div>
      
    </div>
  );
};

export default CabinaDetail;
