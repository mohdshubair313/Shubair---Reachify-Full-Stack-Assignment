// src/App.jsx
import React from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import { ItemProvider } from './context/ItemContext';

function App() {
  return (
    <ItemProvider>
      <div className="App">
        <h1>Item List</h1>
        <AddItem />
        <ItemList />
      </div>
    </ItemProvider>
  );
}

export default App;
