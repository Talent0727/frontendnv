import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

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
                            ¡Bienvenido de nuevo a Nury Valenzuela Ingrese su correo electrónico para comenzar.
                        </p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={loginHandler}>
                            <div className="form-floating mb-3">
                                <input type="email" onChange={(e) => setEmail(e.target.value)} id='email' className="form-control" placeholder="tucorreo@ejemplo.com" required />
                                <label htmlFor="email">
                                    <i className="fas fa-at"></i> Tu Correo. <span className="required">:*</span>
                                </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" onChange={(e) => setPassword(e.target.value)} id='password' className="form-control" placeholder="La Contraseña." required />
                                <label htmlFor="password">
                                    <i className="fas fa-key"></i> La Contraseña. <span className="required">:*</span>
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary">
                                <i className="fas fa-user-shield"></i> Iniciar Sesión.
                            </button>
                            <hr className="my-4" />
                            <small className="text-muted">
                                <p style={{ textAlign: "justify" }}>
                                    {' '}
                                    SI TODAVÍA NO TIENES UNA CUENTA DE USUARIO DE Nury Valenzuela UTILIZAR ESTA OPCIÓN PARA ACCEDER AL FORMULARIO
                                    DE REGISTRO.{' '}
                                    {' '}
                                    TE SOLICITAREMOS LA INFORMACIÓN IMPRESCINDIBLE PARA REALIZAR EL PROCESO DE COMPRA.{' '}
                                    <Link to="/register" rel="noopener noreferrer" className="btn btn-secondary">
                                        <i className="fas fa-user-plus"></i> Regístrarse.
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

export default SignIn;