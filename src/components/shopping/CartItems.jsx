import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import Checkout from './Checkout';
import { Store } from '../../utils/Store';
import CartItem from './CartItem';

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
        <main>
            <div className="container mt-5">
                <div className="npc-row">
                    <h2 className="npc-title">
                        <i className="fas fa-shopping-cart" /> Carrito De Compras.
                    </h2>
                    <hr className="mb-5" />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="c-col">
                            {
                                cartItems.length === 0 ? (
                                    <h4 className='no-products'>
                                        ¡.NO Has Añadido Ningún Producto Al Carrito.!
                                    </h4>
                                ) : (
                                    <div className="w-groups">
                                        {
                                            cartItems.map((item) => (
                                                <CartItem key={item._id} item={item} removeItemHandler={removeItemHandler} updateCartHandler={updateCartHandler} />
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <hr className="mb-5" />
                    <div className="col-md-12">
                        <div className="c-col">
                            <div className="cart-bill">
                                <h2 className="bill-title">
                                    Mi Factura.
                                </h2>
                                {
                                    cartItems.length === 0 ? (
                                        <h4 className='no-products'>
                                            ¡.Actualmente NO Hay Productos.!
                                        </h4>
                                    ) : (
                                        <div className="bill-groups">
                                            {
                                                cartItems.map((item) => (
                                                    <div className="bill-group" key={item._id}>
                                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                            {item.title}
                                                        </span>
                                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                            {item.category}
                                                        </span>
                                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                            {item.subcategory}
                                                        </span>
                                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                            {item.size}
                                                        </span>
                                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                                            {item.color}
                                                        </span>
                                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                                            {(item.price).toLocaleString('es-CO', {
                                                                style: 'currency',
                                                                currency: 'COP',
                                                            })}
                                                        </span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                                <div className="bill-total">
                                    <div className="bill-group">
                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            SubTotal. :*
                                        </span>
                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            {(uint1.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                        </span>
                                    </div>
                                    <div className="bill-group">
                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            Impuesto. :*
                                        </span>
                                        <span style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            {(uint2.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                        </span>
                                    </div>
                                    <div className="bill-group">
                                        <h3 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            Total. :*
                                        </h3>
                                        <h3 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            {(uint3.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                        </h3>
                                    </div>
                                </div>
                                <div className="bill-btn">
                                    {cartItems.length > 0 && (<button onClick={() => setOpen(true)}>
                                        <i className="fa-solid fa-credit-card"></i> Verificar.
                                    </button>)}
                                </div>
                                <hr className="my-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Checkout setOpen={setOpen} cartItems={cartItems} subTotal={subTotal} taxPrice={taxPrice} totalPrice={totalPrice} />}
        </main>
    );
};

export default CartItems;