import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (name && price && description) {
      addProduct({ name, price: parseFloat(price), description });
      setName('');
      setPrice('');
      setDescription('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Product</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;