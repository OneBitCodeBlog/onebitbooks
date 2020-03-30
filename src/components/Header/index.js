import React from 'react';
import { Link } from 'react-router-dom';

import { FiShoppingBag } from 'react-icons/fi';
import './styles.css';

import logo from '../../assets/book.png';

export default function Header() {;
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img className="logo-icon" src={logo} alt="Rocketshoes" />
        <span className="logo-text">OneBitBooks</span>
      </Link>

      <Link to="/cart" className="header-cart">
        <div>
          <strong>Sacola</strong>
          <span>
            <strong>4</strong> livros
          </span>
        </div>
        <FiShoppingBag size={36} color="#FFF" />
      </Link>
    </header>
  );
}