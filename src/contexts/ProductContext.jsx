import React, { createContext, useEffect, useState } from 'react'

// create context
export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  // producte state
  const [products, setProducts] = useState([]);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch();
    }
  }, []);
  
  return (
    <ProductContext.Provider>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext