import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../../utils/Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {

    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, wish } = state;

    const [selectedImg, setSelectedImg] = useState('');

    const [product, setProduct] = useState([]);
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');

    const location = useLocation();

    const id = location.pathname.split("/")[2];

    useEffect(() => {

        const fetchData = async () => {
            const resultProduct = await axios.get(`/api/products/find/${id}`);
            setProduct(resultProduct.data);
        }

        fetchData();

    }, [id]);

    //add to cart
    const addToCartHandler = async () => {
        const existsItem = cart.cartItems.find((x) => x._id === product._id); //if it already exists in cart
        const quantity = existsItem ? existsItem.quantity + 1 : 1; // then quantity + 1 if not then 1

        ctxDispatch({
            type: 'ADD_TO_CART',
            payload: { ...product, quantity, size, color },
        });

        //this put if you will or not
        toast.success('¡.Ha Agregado Con Éxito El Producto Al Carrito.!');
        navigate('/cart');
    }

    const addToWishHandler = async () => {
        const existsItem = wish.wishItems.find((x) => x._id === product._id); //if it already exists in wish
        const quantity = existsItem ? existsItem.quantity : 1; // quantity is 1

        if (existsItem) {
            toast.error('Lo Siento. ¡.Ya Has Añadido El Producto A Tu Lista De Deseos.!');
            return; //not duplicate add product to wishlist
        }

        ctxDispatch({
            type: 'ADD_TO_WISH',
            payload: { ...product, quantity },
        });

        //this put if you will or not
        toast.success('¡.Ha Agregado Con Éxito El Producto A La Lista De Deseos.!');
        navigate('/wish');
    }

    const uint8 = new Uint32Array([product.price]);

    return (
        <div className='pd-container'>
            <div className="container">
                <div className="p-5 text-center bg-light">
                    <a className="btn btn-primary btn-lg active" href="/shop" rel="noopener noreferrer" role="button">
                        <span className='fas fa-arrow-circle-left'> Regresa.</span>
                    </a>
                </div>
                <div className="card text-center border border-primary shadow-0 ">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <div className="pd-col">
                            <div className="pd-imageDiv">
                                <div className="pd-top">
                                    <img src={selectedImg || `${product.image}`} className='pd-img img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail' alt={product.title} title={product.title} />
                                </div>
                                <div className="pd-bottom">
                                    <img src={`${product.image}`} onClick={() => setSelectedImg(`${product.image}`)} className='pd-smallImg' alt={product.title} title={product.title} />
                                    {product.imagesOnes?.map((item) => (
                                        <img src={`${item.value}`} onClick={() => setSelectedImg(`${item.value}`)} className='pd-smallImg' alt={product.title} title={product.title} key={item.i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-header">
                        <h2>
                            <FontAwesomeIcon icon={faBagShopping} /> Productos Detalles.
                        </h2>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            <div className="pd-group">
                                <h3 className="pd-title">
                                    {product.title}
                                </h3>
                            </div>
                        </h5>
                        <p className="card-text">
                            <div className="pd-group">
                                <span className="pd-category badge badge-secondary mb-2" style={{ fontSize: "20px" }}>
                                    {product.category}
                                </span>
                            </div>
                            <div className="pd-group">
                                <span className="pd-subcategory badge badge-secondary mb-2" style={{ fontSize: "20px" }}>
                                    {product.subcategory}
                                </span>
                            </div>
                        </p>
                        <p className="card-text">
                            <div className="pd-group">
                                <p className="pd-desc" style={{ textAlign: "justify" }}>
                                    <strong>
                                        Detalles. :*
                                    </strong>
                                    <br />
                                    {product.description}
                                </p>
                            </div>
                        </p>
                        <p className="card-text">
                            <div className="pd-group">
                                <p className="pd-quantity badge badge-secondary mb-2" style={{ fontSize: "20px" }}>
                                    Unidades. :* <span className='pd-quantityNumber badge badge-success'>
                                        <FontAwesomeIcon icon="fa-solid fa-check" style={{ color: "green" }} /> {product.countInStock > 0 ? 'EN STOCK.' : 'AGOTADO.'}
                                    </span>
                                </p>
                            </div>
                        </p>
                        <p className="card-text">
                            <div className="pd-group">
                                <div className="pd-otherAction">
                                    <div className="pd-size" style={{ textAlign: "justify" }}>
                                        <h4 className="pd-sizeTitle">
                                            Selecciona La Talla 📏. :*
                                        </h4>
                                        <div className="pd-sizeDiv">
                                            {
                                                product.sizes?.map((size) => (
                                                    <>
                                                        <input type="radio" onChange={(e) => setSize(e.target.value)} id={size.value} name="size" value={size.value} required />
                                                        <label htmlFor={size.value}>{size.value}</label>
                                                    </>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pd-group">
                                <div className="pd-otherAction">
                                    <div className="pd-color" style={{ textAlign: "justify" }}>
                                        <h4 className="pd-sizeTitle">
                                            Selecciona Los Colores 🖌️. :*
                                        </h4>
                                        <div className="pd-sizeDiv">
                                            {
                                                product.colors?.map((color) => (
                                                    <>
                                                        <input type="radio" onChange={(e) => setColor(e.target.value)} id={color.value} name="color" value={color.value} required />
                                                        <label htmlFor={color.value}>{color.value}</label>
                                                    </>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </p>
                        <p className="card-text">
                            <div className="pd-group">
                                <span className="pd-price badge badge-success mb-2" style={{ color: "green", fontSize: "20px" }}>
                                    Precio. :* {(uint8.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                </span>
                            </div>
                            <div className="pd-group">
                                <span className="pd-star badge badge-warning mb-2" style={{ color: "black", fontSize: "20px" }}>
                                    Clasificación. :* {product.star}
                                </span>
                            </div>
                        </p>
                        <p className="card-text">
                            <div className="pd-group">
                                <div className="pd-buttonsgroup">
                                    <button className='pd-wish' onClick={addToWishHandler}>
                                        <span className="fa fa-heart" /> Añadir A La Lista De Deseos.
                                    </button>
                                    <button className='pd-cart' onClick={addToCartHandler}>
                                        <i className="fa fa-shopping-basket" /> Añadir Al Carrito.
                                    </button>
                                </div>
                            </div>
                        </p>
                    </div>
                    <div className="card-footer">
                        <div className="p-5 text-center bg-light">
                            <a className="btn btn-primary btn-lg active" href="/shop" rel="noopener noreferrer" role="button">
                                <span className='fas fa-arrow-circle-left'> Regresa.</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;