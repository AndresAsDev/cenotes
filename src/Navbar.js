import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">Homun Travel</div>
        <div className="navbar-right">
          <div className="nav-links">
            <Link className="cenotes" to="/cenotes">Cenotes</Link>
            <Link className="restaurantes" to="/restaurantes">Restaurantes</Link>
            <Link className="cabinas" to="/cabinas">Cabinas</Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
  
  
  
  