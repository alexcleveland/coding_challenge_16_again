import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Beer', price: 5.99, description: 'Best American Beer around the Budlight' },
    { id: 2, name: 'Pizza', price: 12.99, description: 'Good old Phily cheese steak pizza delivered straight from Dominos ' },
    { id: 3, name: 'Burger', price: 7.99, description: 'The the secret recipe from the Krusty Crabs' },
  ]);

  function addProduct(newProduct) {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts]; 
      updatedProducts.push({ ...newProduct, id: prevProducts.length + 1 }); 
      return updatedProducts; 
    });
  }

  return (
    <div>
      <h1>Product Dashboard</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;