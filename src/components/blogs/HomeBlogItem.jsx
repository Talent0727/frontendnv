/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/index.css'

const HomeBlogItem = ({ blog }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="blog-content-wrapper">
            <div className="blog-content-carousel">
              {/* Single Blog Start */}
              <Link to={`/blogs/${blog._id}`} rel="noopener noreferrer">
                <div className="single-blog-wrap" style={{ marginTop: '50px' }}>
                  <figure className='blog-thumbnail'>
                    <a href="#!">
                      <img src={blog.image} alt={blog.title} title={blog.title} />
                    </a>
                  </figure>
                  <div className="blog-details">
                    <h3>
                      <a href="#!" rel="noopener noreferrer">
                        {blog.title}
                      </a>
                    </h3>
                    <div className="blog-meta">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <a href="#!" rel="noopener noreferrer">
                            <span>{blog.author}</span>
                          </a>
                          <a href="#!" rel="noopener noreferrer">
                            <span>{blog.createdAt.slice(0, 10)}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      {blog.description}
                    </p>
                  </div>
                </div>
              </Link>
              {/* Single Blog End */}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Content */}
    </>
  );
};

export default HomeBlogItem;