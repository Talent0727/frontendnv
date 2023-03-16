import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import ProductDetails from '../../components/products/ProductDetails';
import Scroll from '../../components/widget/Scroll';

const Product = () => {
  return (
    <>
      <Header />
      <ProductDetails />
      <Footer />
      <Scroll />
    </>
  );
};

export default Product;