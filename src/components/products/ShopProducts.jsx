import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ShopProduct from './ShopProduct';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShopProducts = ({ list }) => {

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const blogsPerPage = 3;
  const pagesVisited = pageNumber * blogsPerPage;

  const pageCount = Math.ceil(list.length / blogsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div className='spr-container'>
      <div className="npc-row">
        <h2 className="npc-title">
          <FontAwesomeIcon icon={faBagShopping} /> PRODUCTOS NUEVOS Y DESTACADOS.
        </h2>
        <hr className="mb-5" />
      </div>
      <div className="spr-row">
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
  );
};

export default ShopProducts;