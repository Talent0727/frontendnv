import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (e) => {
        e.preventDefault();

        try {

            const { data } = await axios.post('/api/users/login', {
                email,
                password
            });

            localStorage.setItem('userInfo', JSON.stringify(data));
            toast.success('¡.Has Iniciado Sesión Correctamente.!');
            navigate('/'); //navigate to home page

        } catch (err) {
            toast.error("¡.Correo Electrónico O Contraseña NO Válidos.!");
        }
    }

    useEffect(() => {
        //check for if exists user then redirect from login to home page
        if (localStorage.getItem('userInfo')) {
            localStorage.getItem('userInfo');
            navigate('/');
        }
    }, [navigate]);

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
                                    <FontAwesomeIcon icon="fa-solid fa-gear" /> Ajustes. :*
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
                                        <a href="#!" className="current" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon="fa-solid fa-gear" /> Ajustes. :*
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
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">
                            <span className="special" style={{ textAlign: "justify", color: "black" }}>
                                Nury Valenzuela&#174;
                            </span>Joyer&iacute;a &#124; Colombia.
                        </h1>
                        <p className="col-lg-10 fs-4" style={{ textAlign: "justify" }}>
                            ¡.Bienvenido.! USUARIOS REGISTRADOS.
                        </p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={loginHandler}>
                            <label htmlFor="email">
                                <i className="fas fa-at"></i> Tu Correo. <span className="required">:*</span>
                            </label>
                            <div className="form-floating mb-3">
                                <input className="form-control is-valid" type="email" onChange={(e) => setEmail(e.target.value)} id='email' placeholder="tucorreo@ejemplo.com" required />
                                <label htmlFor="email">
                                    <i className="fas fa-at"></i> Tu Correo. <span className="required">:*</span>
                                </label>
                            </div>
                            <label htmlFor="password">
                                <i className="fas fa-key"></i> La Contraseña. <span className="required">:*</span>
                            </label>
                            <div className="form-floating mb-3">
                                <input className="form-control is-valid" type="password" onChange={(e) => setPassword(e.target.value)} id='password' placeholder="La Contraseña." required />
                                <label htmlFor="password">
                                    <i className="fas fa-key"></i> La Contraseña. <span className="required">:*</span>
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary">
                                <i className="fas fa-user-shield"></i> Iniciar Sesi&#243;n.
                            </button>
                            <hr className="my-4" />
                            <small className="text-muted">
                                <p style={{ textAlign: "justify" }}>
                                    {' '}
                                    SI TODAV&#205;A NO TIENES UNA CUENTA DE USUARIO PARA ACCEDER AL FORMULARIO
                                    DE REGISTRO.{' '}
                                    {' '}
                                    TE SOLICITAREMOS LA INFORMACI&#211;N IMPRESCINDIBLE PARA REALIZAR EL PROCESO DE COMPRA.{' '}
                                    <Link to="/register" rel="noopener noreferrer" className="btn btn-secondary">
                                        <i className="fas fa-user-plus"></i> Reg&#237;strarse.
                                    </Link>
                                </p>
                            </small>
                        </form>
                    </div>
                </div>
            </div>
            <div className="b-example-divider"></div>
        </>
    );
};

export default SignIn;