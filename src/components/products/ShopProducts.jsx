import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ShopProduct from './ShopProduct';

const ShopProducts = ({ list }) => {

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const blogsPerPage = 18;
  const pagesVisited = pageNumber * blogsPerPage;

  const pageCount = Math.ceil(list.length / blogsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <>
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
                  </div>
                </div>
                <div className="shop-page-products-wrap">
                  <div className="products-wrapper">
                    <div className="row">
                      <div>
                        {
                          list.length === 0 ? (
                            <h3 className='no-data'>¡.Actualmente NO Hay Productos.!</h3>
                          ) : (

                            <>

                              <div className='spr-groups'>
                                {
                                  list.slice(pagesVisited, pagesVisited + blogsPerPage).map((product) => (
                                    <ShopProduct key={product._id} product={product} />
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
            </div>
            {/* End Shop Page Content */}
          </div>
        </div>
      </div>
      {/*== End Shop Page Wrapper ==*/}
    </>
  );
};

export default ShopProducts;