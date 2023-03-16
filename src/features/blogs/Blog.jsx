import React from 'react';
import BlogLists from '../../components/blogs/BlogLists';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import Scroll from '../../components/widget/Scroll';

const Blog = () => {
  return (
    <>
      <Header />
      <BlogLists />
      <Footer />
      <Scroll />
    </>
  );
};

export default Blog;