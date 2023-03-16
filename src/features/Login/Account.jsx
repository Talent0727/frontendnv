import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import MyAccount from '../../components/login/MyAccount';
import Scroll from '../../components/widget/Scroll';

const Account = () => {
  return (
    <>
      <Header />
      <MyAccount />
      <Footer />
      <Scroll />
    </>
  );
};

export default Account;