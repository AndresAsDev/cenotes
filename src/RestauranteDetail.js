import React from 'react';
import { useParams } from 'react-router-dom';
import './RestauranteDetail.css';

const restauranteInfo = {
  '00': {
    title: 'Restaurante Santa Cruz',
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/16/c4/ea/9b/restaurante-santa-cruz.jpg',
    price: 'Según el platillo',
    description: 'Deliciosa comida típica yucateca',
    location: 'C. 19, 97580 Homún, Yuc',
    mapa:"https://www.google.com/maps/d/u/0/embed?mid=13TayxmsEmID-9B95Q8j9pySGdXzXJTU&ehbc=2E312F&noprof=1"
  },
  '01': {
    title: '',
    imageUrl: 'URL_de_la_imagen2',
    price: '$$$',
    description: 'Descripción del restaurante 2.',
    location: 'Ubicación del restaurante 2',
  },
  // ... Agrega más restaurantes y su información
};

const RestauranteDetail = () => {
 const { id } = useParams();
  const restaurante = restauranteInfo[id];

  if (!restaurante) {
    return <div>Restaurante no encontrado222.</div>;
  }

  return (
    <div className='container'>
      <div className='info-map-container'>
        <div className='info-container'>
          <h2>Detalles del restaurante: {restaurante.title}</h2>
          <img src={restaurante.imageUrl} alt={restaurante.title} />
          <p>Precio: {restaurante.price}</p>
          <p>Descripción: {restaurante.description}</p>
          <p>Ubicación: {restaurante.location}</p>
        </div>
        <div className='map-container'>
          <iframe src={restaurante.mapa} width="320" height="700"></iframe>
        </div>
      </div>
    </div>
  );
  
};

export default RestauranteDetail;
