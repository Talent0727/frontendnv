import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Store } from '../../utils/Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import 'flowbite';

const WishList = () => {

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { wish: { wishItems } } = state;

  const removeItemHandler = (item) => {
    ctxDispatch({
      type: 'REMOVE_FROM_WISH',
      payload: item,
    });
    toast.success('¡.Has Eliminado Con Éxito El Producto De La Lista De Deseos.!');
  }

  return (
    <>
      <div className="b-example-divider" style={{ marginTop: '0%' }}></div>
      {/*== Start Page Header ==*/}
      <div id="page-header-wrapper">
        <div className="container">
          <div className="row">
            {/* Page Title Area Start */}
            <div className="col-6">
              <div className="page-title-wrap">
                <h1>
                  <i className="fa-solid fa-heart"></i> LISTA DE DESEOS.
                </h1>
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
                    <a href="/shop" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faBagShopping} />  PRODUCTOS.
                    </a>
                  </li>
                  <li>
                    <a href="/wish" className="current" rel="noopener noreferrer">
                      <i className="fa-solid fa-heart"></i> LISTA DE DESEOS.
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
      <div id="wishlist-page-wrapper" className="page-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="pro-thumbnail">IMAGEN. :*</th>
                      <th className="pro-title">NOMBRE. :*</th>
                      <th className="pro-price">MEN&#218; 1 CATEGOR&#205;A. :*</th>
                      <th className="pro-quantity">MEN&#218; 2 CATEGOR&#205;A. :*</th>
                      <th className="pro-quantity">MEN&#218; 3 CATEGOR&#205;A. :*</th>
                      <th className="pro-subtotal">PRECIO. :*</th>
                      <th className="pro-remove">ACCI&#211;N. :*</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      wishItems.length === 0 ? (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                          <span className="font-medium no-data" style={{ fontSize: "15px" }}>
                            ¡.NO Has Añadido Ning&#250;n Producto A La Lista De Deseos.!
                          </span>
                        </div>
                      ) : (
                        <>
                          {
                            wishItems.map((item, index) => (
                              <tr key={index}>
                                <td className="pro-thumbnail">
                                  <Link to={`/product/${item._id}`} rel="noopener noreferrer">
                                    <img
                                      src={item.image}
                                      className="card-img-top img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail"
                                      alt={item.title}
                                      title={item.title} />
                                  </Link>
                                </td>
                                <td className="pro-title">
                                  <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                                    {item.title}
                                  </span>
                                </td>
                                <td className="pro-title">
                                  <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                    {item.categoryOptions}
                                  </span>
                                </td>
                                <td className="pro-title">
                                  <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                    {item.subcategoryOptions}
                                  </span>
                                </td>
                                <td className="pro-title">
                                  <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                    {item.tripletecategoryOptions}
                                  </span>
                                </td>
                                <td className="pro-price">
                                  <span>
                                    <em>
                                      <b style={{ color: "green", fontSize: "20px" }} className="badge badge-success mb-2">
                                        {(item.price).toLocaleString('es-CO', {
                                          style: 'currency',
                                          currency: 'COP',
                                        })}
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
                            ))}
                        </>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;