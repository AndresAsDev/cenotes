import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
/* import Button from '@mui/material/Button';
import { NextLinkComposed } from '../src/Link'; */

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">Homun Travel</div>
        <div className="navbar-right">
          <div className="nav-links">
            <Link className="cenotes" to="/cenotes">Cenotes</Link>
            <Link className="restaurantes" to="/restaurantes">Restaurantes</Link>
            <Link className="cabinas" to="/cabinas">Cabañas</Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
  
  
  
  