import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import Checkout from './Checkout';
import { Store } from '../../utils/Store';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart: { cartItems } } = state;

    const [open, setOpen] = useState(false);

    const removeItemHandler = (item) => {
        ctxDispatch({
            type: 'REMOVE_FROM_CART',
            payload: item,
        });
        toast.success('¡.Has Eliminado Con Éxito El Producto Del Carrito.!');
    }

    const updateCartHandler = (item, quantity) => {
        ctxDispatch({
            type: 'ADD_TO_CART',
            payload: { ...item, quantity },
        });
    }

    const subTotal = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    const taxPrice = (0.19 * subTotal); //19% tax in Colombia.
    const totalPrice = taxPrice + subTotal;

    const uint1 = new Uint32Array([subTotal]);
    const uint2 = new Uint32Array([taxPrice]);
    const uint3 = new Uint32Array([totalPrice]);

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
                                    <i className="fas fa-shopping-cart" /> Carrito De Compras.
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
                                        <a href="/cart" className="current" rel="noopener noreferrer">
                                            <i className="fas fa-shopping-cart" /> Carrito De Compras.
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
                    cartItems.length === 0 ? (
                        <h4 className='no-products'>
                            ¡.NO Has Añadido Ning&#250;n Producto Al Carrito.!
                        </h4>
                    ) : (
                        <div className="spr-groups">
                            {
                                cartItems.map((item) => (
                                    <CartItem key={item._id} item={item} removeItemHandler={removeItemHandler} updateCartHandler={updateCartHandler} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            <div id="cart-page-wrapper" className="page-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Cart Table Area */}
                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="pro-thumbnail">NOMBRE. :*</th>
                                            <th className="pro-price">CATEGOR&#205;A. :*</th>
                                            <th className="pro-price">SUBCATEGOR&#205;A. :*</th>
                                            <th className="pro-quantity">PRECIO. :*</th>
                                            <th className="pro-subtotal">TALLA. :*</th>
                                            <th className="pro-remove">COLOR DE ORO. :*</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.length === 0 ? (
                                                <h4 className='no-products'>
                                                    ¡.Actualmente NO Hay Productos.!
                                                </h4>
                                            ) : (
                                                <>
                                                    {
                                                        cartItems.map((item) => (
                                                            <tr key={item._id}>
                                                                <td className="pro-thumbnail">
                                                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                                        {item.title}
                                                                    </span>
                                                                </td>
                                                                <td className="pro-title">
                                                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                                        {item.category}
                                                                    </span>
                                                                </td>
                                                                <td className="pro-price">
                                                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                                        {item.subcategory}
                                                                    </span>
                                                                </td>
                                                                <td className="pro-subtotal">
                                                                    <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                                        {(item.price).toLocaleString('es-CO', {
                                                                            style: 'currency',
                                                                            currency: 'COP',
                                                                        })}
                                                                    </span>
                                                                </td>
                                                                <td className="pro-quantity">
                                                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                                        {item.size}
                                                                    </span>
                                                                </td>
                                                                <td className="pro-remove">
                                                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                                        {item.color}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            {/* Cart Update Option */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 ml-auto">
                            {/* Cart Calculation Area */}
                            <div className="cart-calculator-wrapper">
                                <div className="cart-calculate-items">
                                    <h3>Mi Factura. :*</h3>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            SubTotal. :*
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            {(uint1.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            Impuesto IVA De 19%. :*
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            {(uint2.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr className="total">
                                                    <td>
                                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            Total. :*
                                                        </span>
                                                    </td>
                                                    <td className="total-amount">
                                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            {(uint3.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {cartItems.length > 0 && (<button onClick={() => setOpen(true)} className="btn btn-brand d-block text-center">
                                    <i className="fa-solid fa-credit-card"></i> Verificar.
                                </button>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Checkout setOpen={setOpen} cartItems={cartItems} subTotal={subTotal} taxPrice={taxPrice} totalPrice={totalPrice} />}
        </>
    );
};

export default CartItems;