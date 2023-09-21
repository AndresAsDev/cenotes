// src/CenoteDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CenoteDetail.css';

const cenoteInfo = {
  '00': {
    title: 'Cenotes Santa Barbar',
    imageUrl: 'https://imagenes.descubro.mx/uploads/2022/05/Cenote-Santa-Barbara.jpeg',
    price: '$250mx',
    description: 'Incluye transporte en bicicleta o truck, salvavidas, wifi,  baños, vestidores, regaderas y estacionamiento',
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
      <div className='info-container'>
        <h2>Detalles del cenote: {cenote.title}</h2>
        {/*  <img src={cenote.imageUrl} alt={title} /> */}
        {/* <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://hippie-inheels.com/wp-content/uploads/2019/04/Santa-Barbara-Cenote-18.jpg" alt="..." className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="https://imagenes.descubro.mx/uploads/2022/05/Cenote-Santa-Barbara.jpeg" alt="..." className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="https://hippie-inheels.com/wp-content/uploads/2019/04/Santa-Barbara-Cenote-18.jpg" alt="..." className="d-block w-100" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={cenote.imageUrl} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={cenote.imageUrl} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={cenote.imageUrl} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <p>Precio: {cenote.price}</p>
        <p>Descripción: {cenote.description}</p>
        <p>Ubicación: {cenote.location}</p>
        {/* Otros detalles de la cabina */}
      </div>

    </div>
  );
};
export default CenoteDetail;
