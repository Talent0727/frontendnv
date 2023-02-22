import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import SignUp from '../../components/login/SignUp';
import Logo from '../../components/layout/Logo';

const Register = () => {
  return (
    <>
      <Header />
      <SignUp />
      <Logo />
      <Footer />
    </>
  );
};

export default Register;