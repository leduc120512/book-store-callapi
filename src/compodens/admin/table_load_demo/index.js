import React, { useState, useEffect } from "react";

const CheckboxApiComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the server (using your product structure)
    fetch("http://localhost:3000/check")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleCheckboxChange = async (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setProducts(updatedProducts);

    const updatedProduct = updatedProducts.find((product) => product.id === id);

    try {
      const response = await fetch("http://localhost:3000/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: updatedProduct.id,
          checked: updatedProduct.checked,
        }),
      });

      const data = await response.json();
      console.log("API response:", data);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Checkbox</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={product.checked}
                  onChange={() => handleCheckboxChange(product.id)}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">Loading products...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CheckboxApiComponent;
