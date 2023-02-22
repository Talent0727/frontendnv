import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import ProductDetails from '../../components/products/ProductDetails';
import Logo from '../../components/layout/Logo';

const Product = () => {
  return (
    <>
      <Header />
      <ProductDetails />
      <Logo />
      <Footer />
    </>
  );
};

export default Product;