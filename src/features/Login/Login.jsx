import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import SignIn from '../../components/login/SignIn';
import Scroll from '../../components/widget/Scroll';

const Login = () => {
  return (
    <>
      <Header />
      <SignIn />
      <Footer />
      <Scroll />
    </>
  );
};

export default Login;