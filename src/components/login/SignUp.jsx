import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
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
                username,
                email,
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
        <main>
            <div class="b-example-divider"></div>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">
                            <span className="special" style={{ textAlign: "justify", color: "black" }}>
                                Nury Valenzuela.
                            </span>
                        </h1>
                        <p className="col-lg-10 fs-4" style={{ textAlign: "justify" }}>
                            ¡.Bienvenido a Nury Valenzuela.! Ingrese su correo electrónico para comenzar.
                        </p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={registerHandler}>
                            <div className="form-floating mb-3">
                                <input type="text" onChange={(e) => setUsername(e.target.value)} id='username' name="username"
                                    className="form-control" placeholder="Tu Usuario." required />
                                <label htmlFor="username">
                                    <i className="fas fa-user-plus"></i> Tu Usuario. <span
                                        className="required">:*</span>
                                </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" onChange={(e) => setEmail(e.target.value)} id='email' name="email"
                                    className="form-control" placeholder="tucorreo@ejemplo.com" required />
                                <label htmlFor="email">
                                    <i className="fas fa-at"></i> Tu Correo. <span className="required">:*</span>
                                </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" onChange={(e) => setPassword(e.target.value)} id='password' name="password"
                                    className="form-control" placeholder="La Contraseña." required />
                                <label htmlFor="password">
                                    <i className="fas fa-key"></i> La Contraseña. <span
                                        className="required">:*</span>
                                </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" onChange={(e) => setRPassword(e.target.value)} id='r_password' name="r_password"
                                    className="form-control" placeholder="La Contraseña Actual." required />
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
                                        <i className="fas fa-user-shield"></i> Inicia Sesión.
                                    </Link>
                                </p>
                            </small>
                        </form>
                    </div>
                </div>
            </div>
            <div class="b-example-divider"></div>
        </main>
    );
};

export default SignUp;