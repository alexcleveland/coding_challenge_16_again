// Task 4 Create the productItem component 
const ProductItem = ({ product }) => {
    return (
      <li>
        <h3>{product.name}</h3>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
      </li>
    );
  };
  
  export default ProductItem;