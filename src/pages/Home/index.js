import React from 'react';

import { FiShoppingBag } from 'react-icons/fi';

import './styles.css';

export default function Home() {
  return (
    <main className="container">
      <ul className="book-catalog">
          <li className="book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51w53T12s8L.jpg" alt="JavaScript: O Guia Definitivo" />
            <strong>JavaScript: O Guia Definitivo</strong> 
            <span>R$ 146,08</span>

            <button type="button" onClick={() => {}}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" />{' '}
                0
              </div>

              <span>Adiconar</span>
            </button>
          </li>
          <li className="book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/511j6cza5bL.jpg" alt="JavaScript: The Good Parts: The Good Parts" />
            <strong>JavaScript: The Good Parts: The Good Parts</strong> 
            <span>R$ 44,69</span>

            <button type="button" onClick={() => {}}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" />{' '}
                0
              </div>

              <span>Adiconar</span>
            </button>
          </li>
          <li className="book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51ZL3TV7D1L._SX360_BO1,204,203,200_.jpg" alt="Padrões JavaScript" />
            <strong>Padrões JavaScript</strong> 
            <span>R$ 47,68</span>

            <button type="button" onClick={() => {}}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" />{' '}
                0
              </div>

              <span>Adiconar</span>
            </button>
          </li>
          <li className="book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51wX6cd1iiL._SX357_BO1,204,203,200_.jpg" alt="Aprendendo Node: Usando JavaScript no Servidor" />
            <strong>Aprendendo Node: Usando JavaScript no Servidor</strong> 
            <span>R$ 66,75</span>

            <button type="button" onClick={() => {}}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" />{' '}
                0
              </div>

              <span>Adiconar</span>
            </button>
          </li>
          <li className="book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51TUG%2BmeWnL._SX342_BO1,204,203,200_.jpg" alt="Princípios de Orientação a Objetos em JavaScript" />
            <strong>Princípios de Orientação a Objetos em JavaScript</strong> 
            <span>R$ 36,00</span>

            <button type="button" onClick={() => {}}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" />{' '}
                0
              </div>

              <span>Adiconar</span>
            </button>
          </li>
          <li className="book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/41357uLpB-L.jpg" alt="Cangaceiro JavaScript: Uma aventura no sertão da programação" />
            <strong>Cangaceiro JavaScript: Uma aventura no sertão da programação</strong> 
            <span>R$ 39,90</span>

            <button type="button" onClick={() => {}}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" />{' '}
                0
              </div>

              <span>Adiconar</span>
            </button>
          </li>
      </ul>
    </main>
  );
}
