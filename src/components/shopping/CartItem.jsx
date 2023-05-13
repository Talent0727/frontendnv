import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item, removeItemHandler, updateCartHandler }) => {
  const uint8 = new Uint32Array([item.price]);
  return (
    <>
      <div id="cart-page-wrapper" className="page-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Cart Table Area */}
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="pro-thumbnail">
                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                          PRODUCTOS. :*
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pro-thumbnail">
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
                                                    src={item.image}
                                                    className="img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail img-blog"
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
                                                    {item.categoryOptions}
                                                  </span>
                                                </a><br />
                                                <a href="#!" className="product-cat-name" rel="noopener noreferrer">
                                                  <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                                    {item.subcategoryOptions}
                                                  </span>
                                                </a><br />
                                                <a href="#!" className="product-cat-name" rel="noopener noreferrer">
                                                  <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                                    {item.tripletecategoryOptions}
                                                  </span>
                                                </a>
                                                <h2 className="product-name">
                                                  <span className='badge badge-info mb-2 text-black' style={{ fontSize: "13px" }}>
                                                    {item.title}
                                                  </span>
                                                </h2>
                                                <div className="product-prices">
                                                  <span className="price">
                                                    <span>
                                                      <em>
                                                        <b style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                          {(uint8.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                                        </b>
                                                      </em>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div className="product-prices">
                                                  <span className="price">
                                                    <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                                                      {item.size}
                                                    </span>
                                                  </span>
                                                </div>
                                                <div className="product-prices">
                                                  <span className="price">
                                                    <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                                                      {item.color}
                                                    </span>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </Link>
                                          <p className="product-desc">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="btn-group">
                                                <div className="c-quantityDiv mb-2">
                                                  <button onClick={() => updateCartHandler(item, item.quantity - 1)} disabled={item.quantity === 1} className='c-minus' style={{ fontSize: "15px" }}>
                                                    &#45;
                                                  </button>
                                                  <span className="c-quantity text-black" style={{ fontSize: "15px" }}>
                                                    {item.quantity}
                                                  </span>
                                                  <button onClick={() => updateCartHandler(item, item.quantity + 1)} className='c-plus' style={{ fontSize: "15px" }}>
                                                    &#43;
                                                  </button>
                                                </div>
                                                <button className='btn btn-danger d-block' onClick={() => removeItemHandler(item)}>
                                                  <span style={{ color: "red", fontSize: "10px" }} alt='Eliminar.' title='Eliminar.' className='badge badge-danger mb-2'>
                                                    <i className="fa-solid fa-trash"></i>
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </p>
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Cart Update Option */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;