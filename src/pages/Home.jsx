import React, { useContext } from 'react'
// import product context
import { ProductContext } from '../contexts/ProductContext'

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // get onlt men's & women's clothing category
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  });
  return (
    <div>
      <section className='py-16'>
        <div className="mx-auto px-[30px] lg:px-0">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gris-cols-5 gap-[30px]'>
            {filteredProducts.map((product) => {
              return (
                <div key={product.id} className='w-full h-[300px] bg-pink-200'>{product.title}</div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home