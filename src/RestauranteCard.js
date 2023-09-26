import React from 'react';
import { Link } from 'react-router-dom';
import './RestauranteCard.css';

const RestauranteCard = ({ id, title, description, imageUrl }) => {
  return (
    <div className="restaurante-card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/restaurantes/${id}`}>Conocer más</Link>
      </div>
    </div>
  );
};

export default RestauranteCard;
