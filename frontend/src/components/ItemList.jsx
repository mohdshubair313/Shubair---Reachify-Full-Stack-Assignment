import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/items/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            }
        })
        .then((response) => {
            setItems(response.data);
        })
        .catch((error) => {
            console.error('Error fetching items:', error);
        });
    }, []);

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
