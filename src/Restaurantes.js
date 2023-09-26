import React from 'react';
import RestauranteCard from './RestauranteCard';

const restaurantesData = [
  {
    id:'00',
    title: 'Restaurante Santa Cruz',
    description: 'Disfruta de deliciosa comida típica yucateca',
    imageUrl: 'https://turismohomun.com/wp-content/uploads/2021/07/Santa-Cruz-Homun-Restaurante.jpg'
  },
  {
    id:'01',
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
          id={restaurante.id}
          title={restaurante.title}
          description={restaurante.description}
          imageUrl={restaurante.imageUrl}
        />
      ))}
    </div>
  );
};

export default Restaurantes;
