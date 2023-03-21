import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Store } from '../../utils/Store';
import WishListItem from './WishListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

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
      <div className="b-example-divider" style={{ marginTop: '100px' }}></div>
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
      <div>
        {
          wishItems.length === 0 ? (
            <h4 className='no-products'>
              ¡.NO Has Añadido Ning&#250;n Producto A La Lista De Deseos.!
            </h4>
          ) : (
            <div className="w-groups">
              {wishItems.map((item) => (
                <WishListItem key={item._id} item={item} removeItemHandler={removeItemHandler} />
              ))}

            </div>
          )
        }
      </div>
    </>
  );
};

export default WishList;