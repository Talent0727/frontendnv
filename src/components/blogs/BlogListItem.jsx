/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogListItem = ({ blog }) => {
  return (
    <>
      <Link to={`/blogs/${blog._id}`} rel="noopener noreferrer">
        {/* Single Product Start */}
        <div className="col-lg-3 col-sm-6">
          <div className="single-product-item" style={{ marginTop: '100px', width: '20rem' }}>
            {/* Product Thumbnail */}
            <figure className="product-thumbnail">
              <a href="#!" className="d-block" rel="noopener noreferrer">
                <img src={blog.image} className='img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail img-blog' alt={blog.title} title={blog.title} />
              </a>
              <figcaption className="product-hvr-content">
                <a href="#!" className="btn btn-brand btn-quickView" rel="noopener noreferrer">
                  <span className='list-group-item px-4 badge badge-dark text-center mb-2' style={{ textAlign: "center", borderRadius: "20px" }}>
                    <i className="fas fa-eye"></i> Ver Blog.
                  </span>
                </a>
              </figcaption>
            </figure>
            {/* Product Details */}
            <div className="product-details">
              <h2 className="product-name">
                {blog.title}
              </h2>
              <div className="blog-meta">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href="#!" className="product-cat-name" rel="noopener noreferrer">
                      <FontAwesomeIcon icon="fa-solid fa-user-tie" /> <span>{blog.author}</span>
                    </a>

                    &#124;

                    <a href="#!" className="product-cat-name" rel="noopener noreferrer">
                      <FontAwesomeIcon icon="fa-solid fa-calendar-days" /> <span>{blog.createdAt.slice(0, 10)}</span>
                    </a>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
            </div>
            <p className="hb-desc" style={{ textAlign: "justify" }}>
              {blog.description}
            </p>
          </div>
        </div>
        {/* Single Product End */}
      </Link>
    </>
  );
};

export default BlogListItem;