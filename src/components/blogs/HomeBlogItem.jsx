/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/index.css'

const HomeBlogItem = ({ blog }) => {
  return (
    <div className='hb-blog'>
      <Link to={`/blogs/${blog._id}`} rel="noopener noreferrer">
        <div className="card text-center border border-primary shadow-0 ">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src={blog.image} className="img-fluid w-50 border border-dark img-rounded mx-auto d-block img-thumbnail img-blog" alt={blog.title} title={blog.title} />
            <a href="#" rel="noopener noreferrer">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
            </a>
          </div>
          <div className="card-header">
            <h3 className="hb-blogTitle">{blog.title}</h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              <p className="hb-desc" style={{ textAlign: "justify" }}>{blog.description}</p>
              <div className="hb-blogFooter">
                <span>{blog.author}</span>
                <span>{blog.createdAt.slice(0, 10)}</span>
              </div>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeBlogItem;