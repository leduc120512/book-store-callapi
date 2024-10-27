import React, { createContext, useState, useContext } from "react";

const SelectedProductsContext = createContext();

export const useSelectedProducts = () => {
  return useContext(SelectedProductsContext);
};

export const SelectedProductsProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const updateSelectedProducts = (products) => {
    setSelectedProducts(products);
  };

  return (
    <SelectedProductsContext.Provider
      value={{ selectedProducts, updateSelectedProducts }}
    >
      {children}
    </SelectedProductsContext.Provider>
  );
};
