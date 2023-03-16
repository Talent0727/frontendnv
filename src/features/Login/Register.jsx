import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import SignUp from '../../components/login/SignUp';
import Scroll from '../../components/widget/Scroll';

const Register = () => {
  return (
    <>
      <Header />
      <SignUp />
      <Footer />
      <Scroll />
    </>
  );
};

export default Register;