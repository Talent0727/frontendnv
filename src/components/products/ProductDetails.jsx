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
                                    <FontAwesomeIcon icon={faBagShopping} />  PRODUCTOS DETALLE.
                                </h1>
                                <hr className="my-4" />
                                <a href="/shop" rel="noopener noreferrer">
                                    <code className='badge rounded-pill badge-dark' style={{ fontSize: "15px" }}>
                                        <FontAwesomeIcon icon="fa-solid fa-chevron-left" /> VOLVER.
                                    </code>
                                </a>
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
                                        <a href="/shop" className="current" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faBagShopping} />  PRODUCTOS DETALLE.
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
            {/*== Start Single Product Wrapper ==*/}
            <div id="single-product-page-wrapper" className="page-padding">
                <div className="container">
                    <div className="row">
                        {/* Single Product Page Content Start */}
                        <div className="col-lg-12">
                            <div className="single-product-page-content">
                                <div className="row">
                                    {/* Product Thumbnail Area Start */}
                                    <div className="col-lg-5">
                                        <div className="product-thumbnail-wrap">
                                            <div className="pd-col">
                                                <div className="pd-imageDiv">
                                                    <div className="product-image-carousel">
                                                        <div className="single-image-item">
                                                            <div className="pd-top">
                                                                <img src={selectedImg || `${product.image}`} className='pd-img img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail img-blog' alt={product.title} title={product.title} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <div className="pd-bottom">
                                                                <img src={`${product.image}`} onClick={() => setSelectedImg(`${product.image}`)} className='pd-smallImg img-blog' alt={product.title} title={product.title} />
                                                                {product.imagesOnes?.map((item) => (
                                                                    <img src={`${item.value}`} onClick={() => setSelectedImg(`${item.value}`)} className='pd-smallImg img-blog' alt={product.title} title={product.title} key={item.i} />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Thumbnail Area End */}
                                    {/* Product Details Area Start */}
                                    <div className="col-lg-7">
                                        <div className="product-details">
                                            <h2>
                                                {product.title}
                                            </h2>
                                            <hr className="my-2" />
                                            <p className="pro-rating">
                                                <span className="pd-category badge badge-secondary mb-2" style={{ fontSize: "20px" }}>
                                                    {product.categoryOptions}
                                                </span>
                                            </p>
                                            <p className="pro-rating">
                                                <span className="pd-subcategory badge badge-secondary mb-2 text-black" style={{ fontSize: "20px" }}>
                                                    {product.subcategoryOptions}
                                                </span>
                                            </p>
                                            <p className="pro-rating">
                                                <span className="pd-subcategory badge badge-secondary mb-2 text-black" style={{ fontSize: "20px" }}>
                                                    {product.tripletecategoryOptions}
                                                </span>
                                            </p>
                                            <hr className="my-2" />
                                            <div className="price-group">
                                                <span className="price badge badge-success text-black mb-2" style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>
                                                    Precio. :* {(uint8.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                                </span>
                                            </div>
                                            <div className="product-info-stock-sku">
                                                <span className="product-stock-status text-success">
                                                    <span className='pd-quantityNumber badge badge-success text-black'>
                                                        <FontAwesomeIcon icon="fa-solid fa-check" style={{ color: "green" }} /> {product.countInStock > 0 ? 'EN STOCK.' : 'AGOTADO.'}
                                                    </span>
                                                </span>
                                            </div>
                                            <hr className="my-2" />
                                            <p className="card-text">
                                                <div className="pd-group">
                                                    <div className="pd-otherAction">
                                                        <div className="pd-size" style={{ textAlign: "justify" }}>
                                                            <h4 className="pd-sizeTitle">
                                                                Talla 📏. :*
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
                                                <hr className="my-2" />
                                                <div className="pd-group">
                                                    <div className="pd-otherAction">
                                                        <div className="pd-color" style={{ textAlign: "justify" }}>
                                                            <h4 className="pd-sizeTitle">
                                                                Color De Oro 🖌️. :*
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
                                            <hr className="my-2" />
                                            <div className="product-quantity d-sm-flex align-items-center">
                                                <button className="btn btn-transparent btn-semi-round" alt="Añadir A La Lista De Deseos." title='Añadir A La Lista De Deseos.' onClick={addToWishHandler}>
                                                    <span className="fa fa-heart" /> Añadir Lista De Deseos.
                                                </button>
                                                <button className="btn btn-transparent btn-semi-round" onClick={addToCartHandler}>
                                                    <i className="fa fa-shopping-basket" /> Añadir Al Carrito.
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Details Area End */}
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        {/* Product Full Description Start */}
                                        <div className="product-full-info-reviews">
                                            {/* Single Product tab Menu */}
                                            <nav className="nav" id="nav-tab">
                                                <a className="active" id="description-tab" rel="noopener noreferrer" data-bs-toggle="tab" href="#description">
                                                    Descripci&#243;n. :*
                                                </a>
                                            </nav>
                                            {/* Single Product tab Menu */}
                                            {/* Single Product tab Content */}
                                            <div className="tab-content" id="nav-tabContent">
                                                <div className="tab-pane fade show active" id="description">
                                                    <p className="pd-desc" style={{ textAlign: "justify" }}>
                                                        <strong>
                                                            <FontAwesomeIcon icon={faBagShopping} /> Productos Detalles. :*
                                                        </strong>
                                                        <hr className="my-2" />
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Single Product tab Content */}
                                        </div>
                                        {/* Product Full Description End */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Product Page Content End */}
                    </div>
                </div>
            </div >
            {/*== End Single Product Wrapper ==*/}
        </>
    );
};

export default ProductDetails;