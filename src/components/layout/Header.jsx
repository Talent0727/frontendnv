import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faInfoCircle, faUserCircle, faBagShopping, faRightToBracket, faPowerOff, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
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
            {/**/}
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        <Link to="/" rel="noopener noreferrer" className="navbar-brand mt-2 mt-lg-0">
                            <img
                                src={Logo}
                                className="site_logo"
                                alt="Nury Valenzuela."
                                title="Nury Valenzuela."
                                loading="lazy"
                                lang="es" />
                        </Link>
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" rel="noopener noreferrer" className="nav-link">
                                    <FontAwesomeIcon icon={faGlobe} /> Inicio.
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop" rel="noopener noreferrer" className="nav-link">
                                    <FontAwesomeIcon icon={faBagShopping} /> Ver Todos Los Productos.
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blogs" rel="noopener noreferrer" className="nav-link">
                                    <FontAwesomeIcon icon={faInfoCircle} /> Blog.
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/location" rel="noopener noreferrer" className="nav-link">
                                    <i className="fa fa-map-marker" /> Contactos.
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle badge badge-secondary mb-2" style={{ fontSize: "20px" }} to="#!" rel="noopener noreferrer" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    &Aacute;REA LEGAL.
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link to="/options1" rel="noopener noreferrer" className="dropdown-item mb-2" style={{ fontSize: "20px" }}>
                                            <i className="fa fa-angle-double-right wv_circle" style={{ fontSize: "20px" }} /> Términos y Condiciones.
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link to="/options2" rel="noopener noreferrer" className="dropdown-item mb-2" style={{ fontSize: "20px" }}>
                                            <i className="fa fa-angle-double-right wv_circle" style={{ fontSize: "20px" }} /> Políticas De Envios, Cambios, Devoluciones Y Garantías.
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link to="/faq" rel="noopener noreferrer" className="dropdown-item mb-2" style={{ fontSize: "20px" }}>
                                            <i className="fa fa-angle-double-right wv_circle" style={{ fontSize: "20px" }} /> Preguntas Frecuentes.
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link to="/about" rel="noopener noreferrer" className="dropdown-item mb-2" style={{ fontSize: "20px" }}>
                                            <i className="fa fa-angle-double-right wv_circle" style={{ fontSize: "20px" }} /> Quiénes Somos.
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                </ul>
                            </li>
                        </ul>
                        {/* Left links */}
                        {
                            userInfo && (
                                <Link to="/account" rel="noopener noreferrer">
                                    <span
                                        className='badge badge-pill badge-danger bg-danger border border-secondary text-white ms-1 rounded-pill mb-2'
                                        style={{ fontSize: "15px" }}
                                        lang="es">
                                        <FontAwesomeIcon icon={faUserCircle} /> Ingresar.
                                    </span>
                                </Link>
                            )
                        }
                        {
                            userInfo ? (
                                <>
                                    <Link to="#!" rel="noopener noreferrer">
                                        <span
                                            className='badge badge-pill badge-danger bg-danger border border-secondary text-white ms-1 rounded-pill mb-2'
                                            style={{ fontSize: "15px" }}
                                            lang="es"
                                            onClick={logoutHandler}
                                        >
                                            <FontAwesomeIcon icon={faPowerOff} aria-hidden="true" /> Cerrar Sesión.
                                        </span>
                                    </Link>
                                    <Link to="/wish" rel="noopener noreferrer" className="text-reset me-3">
                                        <FontAwesomeIcon icon={faHeart} style={{ fontSize: "20px" }} />
                                        <span
                                            className='badge rounded-pill badge-notification bg-danger mb-2'
                                            style={{ fontSize: "15px" }}
                                            lang="es"
                                        >
                                            {wish.wishItems.length}
                                        </span>
                                    </Link>
                                    <Link to="/cart" rel="noopener noreferrer" className="text-reset me-3">
                                        <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "20px" }} />
                                        {cartItemsLength ? (<span className="badge rounded-pill badge-notification bg-danger mb-2" style={{ fontSize: "15px" }}>{cartItemsLength}</span>) : (<span className="badge rounded-pill badge-notification bg-danger mb-2" style={{ fontSize: "15px" }} lang="es">0</span>)}
                                    </Link>
                                </>
                            ) : (
                                <Link to="/login" rel="noopener noreferrer" className="text-reset me-3">
                                    <span
                                        className='badge badge-pill badge-danger bg-danger border border-secondary text-white ms-1 rounded-pill mb-2'
                                        style={{ fontSize: "15px" }}
                                        lang="es">
                                        <FontAwesomeIcon icon={faRightToBracket} /> Inicia Sesi&oacute;n.
                                    </span>
                                </Link>
                            )
                        }
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
            {/**/}
        </>
    );
};

export default Header;