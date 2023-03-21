import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderDetails = ({ item }) => {
  const uint8 = new Uint32Array([item.price]);
  return (
    <>
      <div id="shop-page-wrapper" className="page-padding">
        <div className="container">
          <div className="row">
            {/* Start Shop Page Content */}
            <div className="col-lg-12 order-first order-lg-last">
              <div className="shop-page-content-wrap">
                <div className="shop-page-products-wrap">
                  <div className="products-wrapper">
                    <div className="row">
                      {/* Single Product Start */}
                      <div className="col-lg-3 col-sm-6">
                        <Link to={`/product/${item._id}`} rel="noopener noreferrer">
                          <div className="single-product-item" style={{ marginTop: '100px', width: '20rem' }}>
                            {/* Product Thumbnail */}
                            <figure className="product-thumbnail">
                              <a href="#!" className="d-block" rel="noopener noreferrer">
                                <img
                                  src={`${item.image}`}
                                  className="iimg-fluid border border-dark img-rounded mx-auto d-block img-thumbnail img-blog"
                                  alt={item.title}
                                  title={item.title} />
                              </a>
                              <figcaption className="product-hvr-content">
                                <a href="#!" className="btn btn-brand btn-quickView" rel="noopener noreferrer">
                                  <span className='list-group-item px-4 badge badge-dark text-center mb-2' style={{ textAlign: "center", borderRadius: "20px" }}>
                                    <i className="fas fa-eye"></i> Ver Producto.
                                  </span>
                                </a>
                              </figcaption>
                            </figure>
                            {/* Product Details */}
                            <div className="product-details">
                              <a href="#!" className="product-cat-name" rel="noopener noreferrer">
                                <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                  Unidades. :* {item.quantity}
                                </span>
                              </a>
                              <h2 className="product-name">
                                <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                                  {item.title}
                                </span>
                              </h2>
                              <div className="product-prices">
                                <span className="badge badge-info mb-2 text-black price" style={{ fontSize: "15px" }}>
                                  {item.size}
                                </span>
                              </div>
                              <div className="product-prices">
                                <span className="badge badge-info mb-2 text-black price" style={{ fontSize: "15px" }}>
                                  {item.color}
                                </span>
                              </div>
                              <div className="product-prices">
                                <span className="price">
                                  <em>
                                    <b style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                      {(uint8.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                    </b>
                                  </em>
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {/* Single Product End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Shop Page Content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrderDetails;