import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import Faq from '../../components/views/Faq';
import Scroll from '../../components/widget/Scroll';

const FaqInfo = () => {
  return (
    <>
      <Header />
      <Faq />
      <Footer />
      <Scroll />
    </>
  );
};

export default FaqInfo;
