/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

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
        <>
            <div class="b-example-divider" style={{ marginTop: '100px' }}></div>
            {/*== Start Page Header ==*/}
            <div id="page-header-wrapper">
                <div className="container">
                    <div className="row">
                        {/* Page Title Area Start */}
                        <div className="col-6">
                            <div className="page-title-wrap">
                                <h1>
                                    <FontAwesomeIcon icon={faInfoCircle} />  BLOG DETALLE.
                                </h1>
                                <hr className="my-4" />
                                <a href="/blogs" rel="noopener noreferrer">
                                    <code className='badge rounded-pill badge-dark' style={{ fontSize: "15px" }}>
                                        <FontAwesomeIcon icon="fa-solid fa-chevron-left" /> VOLVER.
                                    </code>
                                </a>
                            </div>
                        </div>
                        {/* Page Title Area End */}
                        {/* Page Breadcrumb Start */}
                        <div className="col-6 m-auto">
                            <nav className="page-breadcrumb-wrap">
                                <ul className="nav justify-content-end">
                                    <li>
                                        <a href="/" rel="noopener noreferrer">
                                            INICIO.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/blogs" className="current" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faInfoCircle} />  BLOG.
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* Page Breadcrumb End */}
                    </div>
                </div>
            </div>
            {/*== End Page Header ==*/}
            <div id="blog-details-page-wrapper" className="page-padding">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-12 order-first order-lg-last">
                            <article className="single-blog-content-wrap">
                                <div className="post-header">
                                    <figure className="post-thumbnail">
                                        <img
                                            src={blog.image}
                                            className="img-fluid w-50 border border-dark img-rounded mx-auto d-block img-thumbnail"
                                            width={300}
                                            height={300}
                                            alt={blog.title}
                                            title={blog.title} />
                                    </figure>
                                    <div className="post-meta">
                                        <h2>
                                            {blog.title}
                                        </h2>
                                        <div className="post-info">
                                            <a href="#!">
                                                <FontAwesomeIcon icon="fa-solid fa-user-tie" /> <span>{blog.author}</span>
                                            </a>
                                            <a href="#!">
                                                <FontAwesomeIcon icon="fa-solid fa-calendar-days" /> <span>{blog.createdAt?.slice(0, 10)}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <p className="blog-desc" style={{ textAlign: "justify" }}>
                                        {blog.description}
                                    </p>
                                </div>
                                <div className="post-footer d-block d-sm-flex justify-content-sm-between align-items-center">
                                    <ul className="tags">
                                        <li>
                                            <a href="#!">
                                                <FontAwesomeIcon icon="fa-solid fa-user-tie" /> <span>{blog.author}</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <FontAwesomeIcon icon="fa-solid fa-calendar-days" /> <span>{blog.createdAt?.slice(0, 10)}</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="post-share mt-3 mt-sm-0">
                                        <a className="text-reset" style={{ fontSize: "25px" }} href="https://www.instagram.com/nuryvalenzuelajoyeria/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                            <i className="fab fa-instagram" style={{ fontSize: "25px", color: "#ac2bac" }} />
                                        </a>
                                        <a className="text-reset" style={{ fontSize: "25px" }} href="https://www.youtube.com/embed/lUIAHkN8TlQ" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                            <i className="fab fa-youtube" style={{ fontSize: "25px", color: "#FD1D1D" }} />
                                        </a>
                                        <a className="text-reset" style={{ fontSize: "25px" }} href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                            <i className="fab fa-whatsapp" style={{ fontSize: "25px", color: "#008000" }} />
                                        </a>
                                    </div>
                                </div>
                            </article>
                            {/* Comment Area Start */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;