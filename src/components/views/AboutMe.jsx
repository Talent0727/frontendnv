import React from 'react';
import Users from './assetsUsers/img/customers/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutMe = () => {

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

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
                                    <FontAwesomeIcon icon="fa-solid fa-user" /> MI PERFIL. :*
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
                                            <FontAwesomeIcon icon="fa-solid fa-user" /> MI PERFIL. :*
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
            <div id="my_account-page-wrapper" className="page-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* My Account Page Start */}
                            <div className="myaccount-page-wrapper">
                                {/* My Account Tab Menu Start */}
                                <div className="row">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="myaccount-tab-menu nav" role="tablist">
                                            <a href="#dashboad" className="active" data-bs-toggle="tab" rel="noopener noreferrer">
                                                <i className="fa fa-dashboard" /> INICIO. :*
                                            </a>
                                            <a href="#address-edit" data-bs-toggle="tab" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon="fa-solid fa-user" /> MI PERFIL. :*
                                            </a>
                                        </div>
                                    </div>
                                    {/* My Account Tab Menu End */}
                                    {/* My Account Tab Content Start */}
                                    <div className="col-lg-9 col-md-8">
                                        <div className="tab-content" id="myaccountContent">
                                            {/* Single Tab Content Start */}
                                            <div className="tab-pane fade show active" id="dashboad" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>
                                                        <i className="fa fa-dashboard" /> INICIO. :*
                                                    </h3>
                                                    <div className="welcome">
                                                        <p style={{ fontWeight: "bold", fontSize: "15px" }}>
                                                            <div id="intro-example" className="p-5 text-center bg-image" style={{ backgroundImage: 'url("https://images.pexels.com/photos/2942855/pexels-photo-2942855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}>
                                                                <div className="mask" style={{ backgroundColor: '#bdc3c787' }}>
                                                                    <div className="d-flex justify-content-center align-items-center h-100">
                                                                        <div className="text-white">
                                                                            <h1 className="mb-3">
                                                                                <span className="special" style={{ textAlign: "center", color: "white", borderRadius: "20px 20px", padding: "2px 4px", backgroundColor: 'rgb(0 0 0 / 12%)' }}>
                                                                                    Nury Valenzuela&#174;
                                                                                </span>Joyer&iacute;a &#124; Colombia.
                                                                            </h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Single Tab Content End */}
                                            {/* Single Tab Content Start */}
                                            <div className="tab-pane fade" id="address-edit" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>
                                                        <FontAwesomeIcon icon="fa-solid fa-user" /> MI PERFIL. :*
                                                    </h3>
                                                    <address>
                                                        <p style={{ textAlign: "justify", marginTop: '50px' }} lang="es">
                                                            {/* Form */}
                                                            <form className="row mb-4">
                                                                <div className="mb-3 col-12 col-md-12 mb-4">
                                                                    {/* Radio button */}
                                                                    <div className="d-inline-flex">
                                                                        {/* Horizontal */}
                                                                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                                                                            <div className="row g-0">
                                                                                <div className="col-md-4">
                                                                                    <img
                                                                                        src={Users}
                                                                                        className="img-fluid rounded-start h-100 w-100 border border-dark img-rounded mx-auto d-block img-thumbnail mb-4"
                                                                                        alt={userInfo.username}
                                                                                        title={userInfo.username} />
                                                                                </div>
                                                                                <div className="col-md-8">
                                                                                    <div className="card-body">
                                                                                        <h5 className="card-title">
                                                                                            <span className="badge rounded-pill text-bg-dark" style={{ fontSize: "15px" }}>
                                                                                                MI USUARIO. :*
                                                                                            </span>
                                                                                        </h5>
                                                                                        <h5 className="card-title">
                                                                                            <span className="badge rounded-pill text-bg-secondary" style={{ fontSize: "15px" }}>
                                                                                                {userInfo.username}
                                                                                            </span>
                                                                                        </h5>
                                                                                        <hr className="my-2" />
                                                                                        <p className="card-text" style={{ textAlign: "justify" }}>
                                                                                            <span className="badge rounded-pill text-bg-primary" style={{ fontSize: "15px" }}>
                                                                                                MI NOMBRE COMPLETO. :*
                                                                                            </span>
                                                                                        </p>
                                                                                        <p className="card-text" style={{ textAlign: "justify" }}>
                                                                                            <span className="badge rounded-pill text-bg-secondary" style={{ fontSize: "15px" }}>
                                                                                                {userInfo.nombres} {userInfo.apellidos}
                                                                                            </span>
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <span>
                                                                <strong>Nota:</strong> Desde el panel de tu cuenta. puede verificar y ver f&#225;cilmente sus pedidos recientes, administrar sus direcciones de env&#237;o y facturaci&#243;n y los detalles de su cuenta.
                                                            </span>
                                                        </p>
                                                    </address>
                                                </div>
                                            </div>
                                            {/* Single Tab Content End */}
                                        </div>
                                    </div>
                                    {/* My Account Tab Content End */}
                                </div>
                            </div>
                            {/* My Account Page End */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;