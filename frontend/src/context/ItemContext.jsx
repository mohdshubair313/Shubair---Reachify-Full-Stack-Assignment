// src/context/ItemContext.jsx
import React, { createContext, useState } from 'react';
import api from '../services/api';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/items/");
      const data = await response.json(); // Ensure response is parsed as JSON
      if (Array.isArray(data)) {
        setItems(data); // Set the items if the response is an array
      } else {
        setItems([]); // Set an empty array if the response is not an array
      }
      setError(null); // Reset error state
    } catch (err) {
      setError('Failed to fetch items');
      setItems([]); // Reset items in case of an error
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (item) => {
    try {
      const response = await api.post('/items', item);
      setItems((prevItems) => [...prevItems, response.data]);
    } catch (err) {
      console.error('Failed to add item');
    }
  };

  const deleteItem = async (id) => {
    try {
      await api.delete(`/items/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (err) {
      console.error('Failed to delete item');
    }
  };

  return (
    <ItemContext.Provider value={{ items, loading, error, fetchItems, addItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};
