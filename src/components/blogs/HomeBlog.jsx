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
        <div id='blog' className='hb-container'>
            <div className="npc-row">
                <h2 className="npc-title">
                    <FontAwesomeIcon icon="fa-solid fa-circle-info" /> BLOGS.
                </h2>
            </div>
            <div className="hb-col">
                <Link to='/blogs' rel='noopener noreferrer' className='hb-more badge badge-secondary mb-2' style={{ fontSize: "20px" }}>
                    Ver Más. <FontAwesomeIcon icon={faEye} />
                </Link>
            </div>
            <div className="hb-row">
                <div className="hb-col">
                    <div className="hb-blogDiv">

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
    );
};

export default HomeBlog;