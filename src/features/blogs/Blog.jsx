import React from 'react';
import BlogLists from '../../components/blogs/BlogLists';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import Logo from '../../components/layout/Logo';

const Blog = () => {
  return (
    <>
      <Header />
      <BlogLists />
      <Logo />
      <Footer />
    </>
  );
};

export default Blog;