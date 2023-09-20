import React from 'react';
import RestauranteCard from './RestauranteCard';

const restaurantesData = [
  {
    title: 'restaurante1',
    description: 'Descripción del restaurante 1...',
    imageUrl: 'URL_de_la_imagen1'
  },
  {
    title: 'restaurante2',
    description: 'Descripción del restaurante 2...',
    imageUrl: 'URL_de_la_imagen2'
  },
  // ... Agrega más restaurantes según sea necesario ...
];

const Restaurantes = () => {
  return (
    <div className="card-container">
      {restaurantesData.map((restaurante, index) => (
        <RestauranteCard
          key={index}
          title={restaurante.title}
          description={restaurante.description}
          imageUrl={restaurante.imageUrl}
        />
      ))}
    </div>
  );
};

export default Restaurantes;
