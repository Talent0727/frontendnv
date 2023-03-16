import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogListItem from './BlogListItem';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const BlogLists = () => {

    const [blogs, setBlogs] = useState([]);

    // for pagination
    const [pageNumber, setPageNumber] = useState(0);
    const blogsPerPage = 10;
    const pagesVisited = pageNumber * blogsPerPage;

    const pageCount = Math.ceil(blogs.length / blogsPerPage);

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    }

    useEffect(() => {

        const fetchData = async () => {
            const resultBlog = await axios.get('/api/blogs/all');
            // i want the latest blogs to show

            const resultBlogData = resultBlog.data;

            const sortResultBlogData = resultBlogData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

            console.log(sortResultBlogData);
            setBlogs(sortResultBlogData);
        }

        fetchData();

    }, []);

    return (
        <>
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
                                        <FontAwesomeIcon icon={faInfoCircle} />  LO &#218;LTIMO DE NUESTRO BLOG.
                                    </h1>
                                    <hr className="my-4" />
                                    <a href="/blogs" rel="noopener noreferrer">
                                        <code className='badge rounded-pill badge-dark' style={{ fontSize: "15px" }}>
                                            <FontAwesomeIcon icon="fa-solid fa-repeat" /> Cargar La P&#225;gina. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "15px" }} />
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
                {/*== Start Shop Page Wrapper ==*/}
                <div id="shop-page-wrapper" className="page-padding">
                    <div className="container">
                        <div className="row">
                            {/* Start Shop Page Content */}
                            <div className="col-lg-12 order-first order-lg-last">
                                <div className="shop-page-content-wrap">
                                    <div className="products-settings-option d-block d-md-flex">
                                        <div className="product-cong-left d-flex align-items-center">
                                            <ul className="product-view d-flex align-items-center">
                                                <li className="current" data-bs-target="grid-view"><i className="fa fa-th" /></li>
                                            </ul>
                                            <span className="show-items">
                                                Art&#237;culos 1 - 10
                                            </span>
                                        </div>
                                    </div>
                                    <div className="shop-page-products-wrap">
                                        <div className="products-wrapper">
                                            <div className="row">
                                                {
                                                    blogs.length === 0 ? (
                                                        <h3 className='no-data'>¡.Actualmente NO Hay Blogs.!</h3>
                                                    ) : (
                                                        <>
                                                            <div className="spr-groups">
                                                                {
                                                                    blogs.slice(pagesVisited, pagesVisited + blogsPerPage).map((blog) => (
                                                                        <BlogListItem key={blog._id} blog={blog} />
                                                                    ))
                                                                }
                                                            </div>
                                                            <ReactPaginate className='filter-pagination'
                                                                previousLabel={"<"}
                                                                nextLabel={">"}
                                                                breakLabel={"..."}
                                                                pageCount={pageCount}
                                                                marginPagesDisplayed={2}
                                                                pageRangeDisplayed={3}
                                                                onPageChange={handlePageClick}
                                                                pageClassName={"pagi-item"}
                                                                pageLinkClassName={"pagi-link"}
                                                                activeClassName={"pagi-active"}
                                                                activeLinkClassName={"pagi-active-link"}
                                                                previousClassName={"pagi-item"}
                                                                previousLinkClassName={"pagi-link"}
                                                                nextClassName={"pagi-item"}
                                                                nextLinkClassName={"pagi-link"}
                                                                breakClassName={"pagi-item"}
                                                                breakLinkClassName={"pagi-link"}
                                                                disabledClassName={"disabledPagi"}
                                                            />
                                                        </>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Shop Page Content */}
                        </div>
                    </div>
                </div>
                {/*== End Shop Page Wrapper ==*/}
            </>
        </>
    );
};

export default BlogLists;