// src/components/Item.jsx
import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

function Item({ item }) {
  const { deleteItem } = useContext(ItemContext);

  return (
    <div className="item">
      <p>{item.name}</p>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  );
}

export default Item;
