import React, { useState } from "react";

interface IProduct {
  id: number;
  name: string;
}
const Basic2 = () => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const newProducts = () => {
    setProducts([...products, { id: products.length, name: "hello react" }]);
  };
  return (
    <>
      <div>
        <button onClick={newProducts}>Add New Products</button>
        <ul>
          {products.map((product: IProduct) => (
            <li key={product.id}>
              {product.name}:{product.id}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Basic2;
