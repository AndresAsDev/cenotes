import React from 'react';
import { useParams } from 'react-router-dom';

const restauranteInfo = {
  restaurante1: {
    imageUrl: 'https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg?w=2000',
    price: '$$',
    description: 'Descripción del restaurante 1.',
    location: 'Ubicación del restaurante 1',
  },
  restaurante2: {
    imageUrl: 'URL_de_la_imagen2',
    price: '$$$',
    description: 'Descripción del restaurante 2.',
    location: 'Ubicación del restaurante 2',
  },
  // ... Agrega más restaurantes y su información
};

const RestauranteDetail = () => {
 const { title } = useParams();
  const restaurante = restauranteInfo[title];

  if (!restaurante) {
    return <div>Restaurante no encontrado222.</div>;
  }

  return (
    <div>
      <h2>Detalles del restaurante: {title}</h2>
      <img src={restaurante.imageUrl} alt={title} />
      <p>Precio: {restaurante.price}</p>
      <p>Descripción: {restaurante.description}</p>
      <p>Ubicación: {restaurante.location}</p>
    </div>
  );
};

export default RestauranteDetail;
