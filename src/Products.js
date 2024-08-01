import React from 'react';
import Product from './Product';
import './Products.css';

function Products() {
  // const products = ['Saga Lusa', 'On the road', 'Ser ou ter'];
  // const listProducts = products.map(product => (
  //   <li key={product.toString()}>{product}</li>
  // ));

  const getProducts = () => {
    return [
      {
        imageUrl: 'https://picsum.photos/200/300',
        productName: 'Produto I',
        releasedData: 'May 31, 2016',
        description: 'Este é um produto de teste',
        rating: 2,
        numOfReviews: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300',
        productName: 'Produto II',
        releasedData: 'May 31, 2016',
        description: 'Este é um produto de teste',
        rating: 3,
        numOfReviews: 3,
      },
      {
        imageUrl: 'https://picsum.photos/200/300',
        productName: 'Produto III',
        releasedData: 'May 31, 2016',
        description: 'Este é um produto de teste',
        rating: 4,
        numOfReviews: 4,
      },
      {
        imageUrl: 'https://picsum.photos/200/300',
        productName: 'Produto IV',
        releasedData: 'May 31, 2016',
        description: 'Este é um produto de teste',
        rating: 5,
        numOfReviews: 5,
      },
    ];
  };

  const products = getProducts();
  const listProducts = products.map(product => (
    <Product key={product.productName} data={product} />
  ));

  return (
    // <div>
    //   {listProducts.length > 0 && (
    //     <div className="products-container">{listProducts}</div>
    //   )}
    //   {listProducts.length == 0 && <p>No products to list</p>}
    // </div>
    <div>
      {listProducts.length > 0 ? (
        <div className="products-container">{listProducts}</div>
      ) : (
        <p>No products to list</p>
      )}
    </div>
  );
}

export default Products;
