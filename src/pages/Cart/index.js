import React from 'react';

import { FiPlusCircle, FiMinusCircle, FiXCircle } from 'react-icons/fi'

import './styles.css';

export default function Cart() {
  return (
    <main className="container">
      <div className="bag-container">
        <table className="book-table">
          <thead>
            <tr>
              <th />
              <th>Livro</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
              <th />
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>
                  <img src="https://images-na.ssl-images-amazon.com/images/I/51w53T12s8L.jpg" alt="JavaScript: O Guia Definitivo" />
                </td>
                <td>
                  <strong>JavaScript: O Guia Definitivo</strong>
                  <span>R$ 146,08</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => {}}>
                      <FiMinusCircle size={20} color="#33BFCB" />
                    </button>
                    <input type="number" readOnly value="1" />
                    <button type="button" onClick={() => {}}>
                      <FiPlusCircle size={20} color="#33BFCB" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$ 1000,00</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => {}}
                  >
                    <FiXCircle size={20} color="#33BFCB" />
                  </button>
                </td>
              </tr>
          </tbody>
        </table>

        <footer>
          <button type="button">Encomendar</button>

          <div className="total">
            <span>Total</span>
            <strong>R$ 1000,00</strong>
          </div>
        </footer>
      </div>
    </main>
  );
}
