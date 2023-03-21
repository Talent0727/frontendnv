import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignUp = () => {

    const navigate = useNavigate();

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [rol, setRol] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
    const [password, setPassword] = useState('');
    const [rPassword, setRPassword] = useState('');

    const registerHandler = async (e) => {
        e.preventDefault();

        //check password === retype password
        if (password !== rPassword) {
            toast.error('¡.Las Contraseñas NO Coinciden.!');
            return;
        }

        try {

            await axios.post('/api/users//register', {
                nombres,
                apellidos,
                username,
                email,
                rol,
                isAdmin,
                password
            });

            toast.success('¡.Se Ha Registrado Exitosamente.!');
            navigate('/login');

        } catch (error) {
            toast.error('¡.Registro Fallido, Por Favor Inténtalo De Nuevo.!');
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
                    <div className="col-lg-5 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">
                            <span className="special" style={{ textAlign: "justify", color: "black" }}>
                                Nury Valenzuela.
                            </span>
                        </h1>
                        <p className="col-lg-10 fs-4" style={{ textAlign: "justify" }}>
                            ¡.Bienvenido A Nury Valenzuela.! NUEVOS USUARIOS.
                        </p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-7">
                        <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={registerHandler}>
                            <label htmlFor="nombres">
                                <i className="fa-solid fa-pen-to-square"></i> Tu Nombre. <span
                                    className="required">:*</span>
                            </label>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control is-valid" type="text" onChange={(e) => setNombres(e.target.value)} id='nombres' name="nombres" placeholder="Tu Nombre." required />
                                <label htmlFor="nombres">
                                    <i className="fa-solid fa-pen-to-square"></i> Tu Nombre. <span
                                        className="required">:*</span>
                                </label>
                            </div>
                            <label htmlFor="apellidos">
                                <i className="fa-solid fa-pen-to-square"></i> Tu Apellido. <span
                                    className="required">:*</span>
                            </label>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control is-valid" type="text" onChange={(e) => setApellidos(e.target.value)} id='apellidos' name="apellidos" placeholder="Tu Apellido." required />
                                <label htmlFor="apellidos">
                                    <i className="fa-solid fa-pen-to-square"></i> Tu Apellido. <span
                                        className="required">:*</span>
                                </label>
                            </div>
                            <label htmlFor="username">
                                <i className="fas fa-user-plus"></i> Tu Usuario. <span
                                    className="required">:*</span>
                            </label>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control is-valid" type="text" onChange={(e) => setUsername(e.target.value)} id='username' name="username" placeholder="Tu Usuario." required />
                                <label htmlFor="username">
                                    <i className="fas fa-user-plus"></i> Tu Usuario. <span
                                        className="required">:*</span>
                                </label>
                            </div>
                            <label htmlFor="email">
                                <i className="fas fa-at"></i> Tu Correo. <span className="required">:*</span>
                            </label>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control is-valid" type="email" onChange={(e) => setEmail(e.target.value)} id='email' name="email" placeholder="tucorreo@ejemplo.com" required />
                                <label htmlFor="email">
                                    <i className="fas fa-at"></i> Tu Correo. <span className="required">:*</span>
                                </label>
                            </div>
                            <label htmlFor="rol">
                                <i className="fa-solid fa-users"></i> Cargo. <span
                                    className="required">:*</span> <span className="badge rounded-pill text-bg-secondary" style={{ fontSize: "15px" }}>
                                    <code className='text-white'>(Administrador) y (Cliente).</code>
                                </span>
                            </label>
                            <div className="form-floating mb-3">
                                <select className="form-control form-select form-select-lg mb-3 is-valid" aria-label=".form-select-lg example" onChange={(e) => setRol(e.target.value)} id='rol' name="rol"
                                    placeholder="Cargo. :*" required>
                                    <option value="" disabled selected>--- Seleccionar ---</option>
                                    <option value="Administrador">Administrador</option>
                                    <option value="Cliente">Cliente</option>
                                </select>
                                <label htmlFor="rol">
                                    <i className="fa-solid fa-users"></i> Cargo. :*
                                </label>
                            </div>
                            <label htmlFor="isAdmin">
                                <i className="fa-solid fa-users"></i> Estado. <span
                                    className="required">:*</span> <span className="badge rounded-pill text-bg-secondary" style={{ fontSize: "15px" }}>
                                    <code className='text-white'>(Activado - Administrador)<br /> y (DesActivado - Cliente).</code>
                                </span>
                            </label>
                            <div className="form-floating mb-3">
                                <select className="form-control form-select form-select-lg mb-3 is-valid" aria-label=".form-select-lg example" onChange={(e) => setIsAdmin(e.target.value)} id='isAdmin' name="isAdmin"
                                    placeholder="Estado. :*" required>
                                    <option value="" disabled selected>--- Seleccionar ---</option>
                                    <option value="false">DesActivado - Cliente</option>
                                    <option value="true">Activado - Administrador</option>
                                </select>
                                <label htmlFor="isAdmin">
                                    <i className="fa-solid fa-users"></i> Estado. :*
                                </label>
                            </div>
                            <label htmlFor="password">
                                <i className="fas fa-key"></i> La Contraseña. <span
                                    className="required">:*</span>
                            </label>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control is-valid" type="password" onChange={(e) => setPassword(e.target.value)} id='password' name="password" placeholder="La Contraseña." required />
                                <label htmlFor="password">
                                    <i className="fas fa-key"></i> La Contraseña. <span
                                        className="required">:*</span>
                                </label>
                            </div>
                            <label htmlFor="r_password">
                                <i className="fas fa-key"></i> La Contraseña Actual. <span
                                    className="required">:*</span>
                            </label>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control is-valid" type="password" onChange={(e) => setRPassword(e.target.value)} id='r_password' name="r_password" placeholder="La Contraseña Actual." required />
                                <label htmlFor="r_password">
                                    <i className="fas fa-key"></i> La Contraseña Actual. <span
                                        className="required">:*</span>
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary">
                                <i className="fas fa-user-plus"></i> Crear Cuenta.
                            </button>
                            <hr className="my-4" />
                            <small className="text-muted">
                                <p style={{ textAlign: "justify" }}>
                                    {' '}¿Ya Tienes Una Cuenta?{' '} <Link to="/login" rel="noopener noreferrer" className="btn btn-secondary">
                                        <i className="fas fa-user-shield"></i> Inicia Sesi&#243;n.
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

export default SignUp;