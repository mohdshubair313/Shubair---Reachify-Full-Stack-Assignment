// src/components/ItemList.jsx
import React, { useContext, useEffect } from 'react'; // Import useContext here
import Item from './Item';
import { ItemContext } from '../context/ItemContext';

function ItemList() {
  const { items, fetchItems, loading, error } = useContext(ItemContext); // useContext properly used here

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading items.</p>;

  // Ensure items is always an array
  if (!Array.isArray(items)) {
    return <p>No items available.</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
