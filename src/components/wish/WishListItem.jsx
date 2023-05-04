import React from 'react';
import { Link } from 'react-router-dom';

const WishListItem = ({ item, removeItemHandler }) => {
  const uint8 = new Uint32Array([item.price]);
  return (
    <>
      {/*== Start Wishlist Page Wrapper ==*/}
      <div id="wishlist-page-wrapper" className="page-padding">
        <div className="container">
          {/* Wishlist Page Content Start */}
          <div className="row">
            <div className="col-lg-12">
              <Link to={`/product/${item._id}`} rel="noopener noreferrer">
                {/* Wishlist Table Area */}
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="pro-thumbnail">IMAGEN. :*</th>
                        <th className="pro-title">NOMBRE. :*</th>
                        <th className="pro-price">CATEGOR&#205;A. :*</th>
                        <th className="pro-quantity">SUBCATEGOR&#205;A. :*</th>
                        <th className="pro-subtotal">PRECIO. :*</th>
                        <th className="pro-remove">ACCI&#211;N. :*</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pro-thumbnail">
                          <a href="#!" rel="noopener noreferrer">
                            <img
                              src={item.image}
                              className="card-img-top img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail"
                              alt={item.title}
                              title={item.title} />
                          </a>
                        </td>
                        <td className="pro-title">
                          <a href="#!" rel="noopener noreferrer">
                            <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                              {item.title}
                            </span>
                          </a>
                        </td>
                        <td className="pro-title">
                          <a href="#!" rel="noopener noreferrer">
                            <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                              {item.category}
                            </span>
                          </a>
                        </td>
                        <td className="pro-title">
                          <a href="#!" rel="noopener noreferrer">
                            <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                              {item.subcategory}
                            </span>
                          </a>
                        </td>
                        <td className="pro-price">
                          <span>
                            <em>
                              <b style={{ color: "green", fontSize: "20px" }} className="badge badge-success mb-2">
                                {(uint8.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                              </b>
                            </em>
                          </span>
                        </td>
                        <td className="pro-remove">
                          <button className='w-btnTrash' onClick={() => removeItemHandler(item)}>
                            <span style={{ color: "red", fontSize: "20px" }} alt='Eliminar.' title='Eliminar.' className='w-trash badge badge-danger mb-2'>
                              <i className="fa-solid fa-trash"></i>
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Link>
            </div>
          </div>
          {/* Wishlist Page Content End */}
        </div>
      </div>
      {/*== Start Wishlist Page Wrapper ==*/}
    </>
  );
};

export default WishListItem;