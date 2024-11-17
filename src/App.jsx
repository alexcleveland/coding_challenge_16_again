import { useState } from 'react'

import './App.css'

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Beer', price: 5.99, description: 'Best American Beer around the Budlight' },
    { id: 2, name: 'Pizza', price: 12.99, description: 'Good old Phily cheese steak pizza delivered straight from Dominos ' },
    { id: 3, name: 'Burger', price: 7.99, description: 'The the secret recipe from the Krusty Crabs' },
  ]);

  function addProduct(newProduct) {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.slice(); 
      const newProductWithId = Object.assign({}, newProduct, { id: prevProducts.length + 1 }); 
      updatedProducts.push(newProductWithId); 
      return updatedProducts; 
    });
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;