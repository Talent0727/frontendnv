import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import SignIn from '../../components/login/SignIn';
import Logo from '../../components/layout/Logo';

const Login = () => {
  return (
    <>
      <Header />
      <SignIn />
      <Logo />
      <Footer />
    </>
  );
};

export default Login;