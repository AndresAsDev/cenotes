import React from 'react';
import { useParams } from 'react-router-dom';

const restauranteInfo = {
  '00': {
    title: 'Restaurante Santa Cruz',
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/16/c4/ea/9b/restaurante-santa-cruz.jpg',
    price: '$$',
    description: 'Deliciosa comida típica yucateca',
    location: 'Ubicación del restaurante 1',
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
    <div>
      <h2>Detalles del restaurante: {restaurante.title}</h2>
      <img src={restaurante.imageUrl} alt={restaurante.title} />
      <p>Precio: {restaurante.price}</p>
      <p>Descripción: {restaurante.description}</p>
      <p>Ubicación: {restaurante.location}</p>
    </div>
  );
};

export default RestauranteDetail;
