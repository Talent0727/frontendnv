/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {

    const [blog, setBlog] = useState([]);

    const location = useLocation();
    //console.log(location);

    const id = location.pathname.split("/")[2];
    console.log(id);

    useEffect(() => {

        const fetchData = async () => {
            const resultBlog = await axios.get(`/api/blogs/find/${id}`);
            console.log(resultBlog.data);
            setBlog(resultBlog.data);
        }

        fetchData();

    }, [id]);

    return (
        <div id='blog' className='hb-container blog'>
            <div className="p-5 text-center bg-light">
                <a className="btn btn-primary btn-lg active" href="/blogs" rel="noopener noreferrer" role="button">
                    <span className='fas fa-arrow-circle-left'> Regresa.</span>
                </a>
            </div>
            <div className="hb-row">
                <div className="hb-col">
                    <div className="hb-blogDiv">
                        <div className="hb-blogs blog">
                            <div className="card text-center border border-primary shadow-0 ">
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src={blog.image} className="img-fluid w-50 border border-dark img-rounded mx-auto d-block img-thumbnail" width={300} height={300} alt={blog.title} title={blog.title} />
                                    <a href="#" rel="noopener noreferrer">
                                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                    </a>
                                </div>
                                <div className="card-header">
                                    <h3 className="blog-title">{blog.title}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="blog-desc" style={{ textAlign: "justify" }}>{blog.description}</p>
                                    <div className="hb-blogFooter blog">
                                        <span>{blog.author}</span>
                                        <span>{blog.createdAt?.slice(0, 10)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 text-center bg-light">
                <a className="btn btn-primary btn-lg active" href="/blogs" rel="noopener noreferrer" role="button">
                    <span className='fas fa-arrow-circle-left'> Regresa.</span>
                </a>
            </div>
        </div>
    );
};

export default BlogDetails;