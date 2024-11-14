import React, { useState, useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

function AddItem() {
  const { addItem } = useContext(ItemContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      const newItem = { name, description };
      await addItem(newItem);  // Call addItem from context
      setName('');  // Clear form fields
      setDescription('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItem;
