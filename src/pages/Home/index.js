import React, { useState, useEffect } from 'react';

import { FiShoppingBag } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('/books');

      setBooks(response.data);
    }

    loadBooks();
  }, []);

  return (
    <main className="container">
      <ul className="book-catalog">
        {books.map(book => (
          <li key={book.id} className="book-container">
            <img src={book.image} alt={book.title} />
            <strong>{book.title}</strong> 
            <span>R$ {book.price}</span>

            <button type="button" onClick={() => {}}>
              <div>
                <FiShoppingBag size={16} color="#33BFCB" />{' '}
                0
              </div>

              <span>Adiconar</span>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
