import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faRightToBracket, faPowerOff, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { Store } from '../../utils/Store';
import Logo from '../assets/img/Logonv.png';

const Header = () => {

    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, wish } = state;

    const cartItemsLength = cart.cartItems.reduce((a, c) => a + c.quantity, 0);

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

    const logoutHandler = () => {
        localStorage.removeItem('userInfo');
        toast.success('¡.Has Terminado Tu Sesion Satisfactoriamente.!');
        navigate('/login');
    }

    return (
        <>
            {/*== Start Header Section ===*/}
            <header id="header-area">
                {/* Start PreHeader Area */}
                <div className="preheader-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start">
                                {/* Start PreHeader Left */}
                                <div className="preheader-left-wrap">
                                    <a href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" target="_blank" rel="noopener noreferrer"><i className="fa fa-phone" /> +57 313&#45;396&#45;63&#45;49</a>
                                </div>
                                {/* End PreHeader Left */}
                            </div>
                            <div className="col-md-6 mt-3 mt-md-0">
                                {/* Start PreHeader Right */}
                                <div className="preheader-right-wrap">
                                    <nav id="site-settings">
                                        <ul className="nav justify-content-center justify-content-md-end">
                                            <li className="dropdown-show">
                                                <a href="#!">&#36; COP &#45; Peso Colombiano.</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* End PreHeader Right */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End PreHeader Area */}
                {/* Start Header Bottom  */}
                <div className="header-bottom-area" id="fixheader">
                    <div className="container-fluid">
                        <div className="row">
                            {/* Start Navigation // Main Menu */}
                            <div className="col-lg-5 m-auto d-none d-lg-block">
                                <div id="navigation-area-wrap">
                                    <nav className="mainmenu">
                                        <ul id="main-navbar" className="clearfix">
                                            <li>
                                                <Link to="/" rel="noopener noreferrer">
                                                    INICIO.
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/shop" rel="noopener noreferrer">
                                                    Ver PRODUCTOS.
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/blogs" rel="noopener noreferrer">
                                                    Ver BLOGS.
                                                </Link>
                                            </li>
                                            <li className="dropdown-show">
                                                <a href="#!" className="arrow-toggle">
                                                    &Aacute;REA LEGAL.
                                                </a>
                                                <ul className="dropdown-nav">
                                                    <li>
                                                        <Link to="/options1" rel="noopener noreferrer" className="mb-2">
                                                            T&#233;rminos y Condiciones.
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/options2" rel="noopener noreferrer" className="mb-2">
                                                            Pol&#237;ticas De Envios, Cambios, Devoluciones Y Garant&#237;as.
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/faq" rel="noopener noreferrer" className="mb-2">
                                                            Preguntas Frecuentes.
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/about" rel="noopener noreferrer" className="mb-2">
                                                            Qui&#233;nes Somos.
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/location" rel="noopener noreferrer">
                                                    CONTACTOS.
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* End Navigation // Main Menu */}
                            {/* Start Logo Area */}
                            <div className="col-lg-2 col-sm-4 m-auto text-center text-sm-start">
                                <div className="logo-wrap mb-4 mb-sm-0">
                                    <Link to="/" rel="noopener noreferrer">
                                        <img
                                            src={Logo}
                                            alt="Nury Valenzuela."
                                            title="Nury Valenzuela."
                                            loading="lazy"
                                            lang="es" />
                                    </Link>
                                </div>
                            </div>
                            {/* End Logo Area */}
                            {/* Header Shop Cong Area */}
                            <div className="col-lg-5 col-sm-8 m-auto">
                                <div className="header-configure-area d-flex justify-content-center justify-content-sm-end align-items-center">
                                    {
                                        userInfo && (
                                            <div className="mini-cart-wrap">

                                                <Link to="/account" rel="noopener noreferrer">
                                                    <span
                                                        className='badge badge-pill badge-danger bg-danger border border-secondary text-white ms-1 rounded-pill mb-2'
                                                        alt="MI PERFIL."
                                                        title='MI PERFIL.'
                                                        style={{ fontSize: "20px" }}
                                                        lang="es">
                                                        <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "20px" }} />
                                                    </span>
                                                </Link>
                                            </div>
                                        )
                                    }
                                    {
                                        userInfo ? (
                                            <>
                                                <div className="mini-cart-wrap">
                                                    <Link to="#!" rel="noopener noreferrer">
                                                        <span
                                                            className='badge badge-pill badge-danger bg-danger border border-secondary text-white ms-1 rounded-pill mb-2'
                                                            alt='Cerrar Sesi&#243;n.'
                                                            title='Cerrar Sesi&#243;n.'
                                                            lang="es"
                                                            style={{ fontSize: "20px" }}
                                                            onClick={logoutHandler}
                                                        >
                                                            <FontAwesomeIcon icon={faPowerOff} aria-hidden="true" style={{ fontSize: "20px" }} />
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="mini-cart-wrap">
                                                    <Link to="/wish" rel="noopener noreferrer" className="text-reset me-3">
                                                        <FontAwesomeIcon icon={faHeart} style={{ fontSize: "20px" }} />
                                                        <span
                                                            className='badge rounded-pill badge-notification bg-danger count mb-2'
                                                            lang="es"
                                                            style={{ fontSize: "15px" }}
                                                        >
                                                            {wish.wishItems.length}
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="mini-cart-wrap">
                                                    <Link to="/cart" rel="noopener noreferrer" className="text-reset me-3">
                                                        <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "20px" }} />
                                                        {cartItemsLength ? (<span className="badge rounded-pill badge-notification bg-danger count mb-2" style={{ fontSize: "15px" }}>{cartItemsLength}</span>) : (<span className="badge rounded-pill badge-notification bg-danger count mb-2" lang="es" style={{ fontSize: "15px" }}>0</span>)}
                                                    </Link>
                                                </div>

                                            </>
                                        ) : (
                                            <Link to="/login" rel="noopener noreferrer" className="text-reset me-3">
                                                <span
                                                    className='badge badge-pill badge-danger bg-danger border border-secondary text-white ms-1 rounded-pill mb-2'
                                                    lang="es">
                                                    <FontAwesomeIcon icon={faRightToBracket} style={{ fontSize: "15px" }} /> Ingreso &#124; Registro.
                                                </span>
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                            {/* Header Shop Cong Area */}
                        </div>
                    </div>
                </div>
                {/* End Header Bottom  */}
            </header>
            {/*== End Header Section ===*/}
        </>
    );
};

export default Header;