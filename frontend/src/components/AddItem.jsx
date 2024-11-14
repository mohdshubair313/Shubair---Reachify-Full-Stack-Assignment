import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('access_token');
        
        axios.post('http://127.0.0.1:8000/api/items/', {
            name,
            description,
            price
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then((response) => {
            console.log('Item added:', response.data);
        })
        .catch((error) => {
            console.error('Error adding item:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItem;
