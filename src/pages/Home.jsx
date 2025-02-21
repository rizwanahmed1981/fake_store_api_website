import React, { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// import product component
import Product from "../components/Product";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // get onlt men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <section className="py-16">
        <div className="mx-auto px-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gris-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
