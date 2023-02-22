import React from 'react';
import Users from './assetsUsers/img/customers/user.png';

const AboutMe = () => {

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

    return (
        <main className="mt-5">
            <div className="container">
                {/*Section: Content*/}
                <section>
                    <div className="row">
                        <div className="col-md-6 gx-5 mb-4">
                            <div className="col-xl-12 col-md-12">
                                <div className="mb-6">
                                    {/* heading */}
                                    <h2 className="mb-0">Mi Cuenta. :*</h2>
                                </div>
                                <p style={{ textAlign: "justify" }} lang="es">
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
                                                                alt="Nury Valenzuela." title="Nury Valenzuela." />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="card-body">
                                                                <h5 className="card-title">
                                                                    <span className="badge rounded-pill text-bg-dark" style={{ fontSize: "20px" }}>
                                                                        {userInfo.username}
                                                                    </span>
                                                                </h5>
                                                                <p className="card-text" style={{ textAlign: "justify" }}>
                                                                    MI PERFIL.
                                                                </p>
                                                                <p className="card-text"><small className="text-muted">Última Actualización Hace 3 Minutos.</small></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <span><strong>Nota:</strong> La Configuración De La Cuenta.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Section: Content*/}
            </div>
        </main>
    );
};

export default AboutMe;