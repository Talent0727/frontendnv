import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeBlogItem from './HomeBlogItem';

const HomeBlog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const resultBlog = await axios.get('/api/blogs/all');
            console.log(resultBlog.data);
            setBlogs(resultBlog.data);
        }

        fetchData();

    }, []);

    return (
        <>
            <section id="blog-section-wrapper">
                <div className="container" id='blog'>
                    {/* Start Section Title Area */}
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="section-title-wrap">
                                <h2>
                                    <FontAwesomeIcon icon="fa-solid fa-circle-info" /> LO &#218;LTIMO DE NUESTRO BLOG.
                                </h2>
                                <p style={{ textAlign: "justify" }}>
                                    ¿Quieres presentar las publicaciones de la mejor manera para resaltar los momentos interesantes de tu blog? ¡Enf&#243;cate en las &#250;ltimas noticias!
                                </p>
                                <div className="hb-col" style={{ marginTop: '20px' }}>
                                    <Link to='/blogs' rel='noopener noreferrer' className='hb-more badge badge-secondary mb-2 text-center' style={{ fontSize: "20px" }}>
                                        Ver M&#225;s. <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Section Title Area */}
                    {/* Start Blog Content */}
                    <div>
                        <div>
                            <div>

                                {
                                    blogs.length === 0 ? (
                                        <h3 className='no-data'>¡.Actualmente NO Hay Blogs.!</h3>
                                    ) : (
                                        <div className="hb-blogs">
                                            {
                                                //only 4 latest
                                                blogs.slice(-4).map((blog) => (
                                                    <HomeBlogItem key={blog._id} blog={blog} />
                                                ))
                                            }
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeBlog;