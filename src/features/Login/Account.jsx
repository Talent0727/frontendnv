import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import MyAccount from '../../components/login/MyAccount';
import Logo from '../../components/layout/Logo';

const Account = () => {
  return (
    <>
      <Header />
      <MyAccount />
      <Logo />
      <Footer />
    </>
  );
};

export default Account;