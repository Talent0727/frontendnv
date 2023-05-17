import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import HomeBlog from '../../components/blogs/HomeBlog';
import Intro from '../../components/layout/Intro';
import NewProducts from '../../components/products/NewProducts';
import Scroll from '../../components/widget/Scroll';

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <NewProducts />
      <HomeBlog />
      <Footer />
      <Scroll />
    </>
  );
};

export default Home;