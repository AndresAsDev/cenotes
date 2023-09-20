// src/components/CabinaCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CabinaCard.css';

const CabinaCard = ({ title, description, imageUrl }) => {
  return (
    <div className="cabina-card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/cabinas/${title}`}>Conocer más</Link>
      </div>
    </div>
  );
};

export default CabinaCard;
