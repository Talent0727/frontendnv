import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import MyOrderDetails from './MyOrderDetails';

const MyOrder = () => {

    const [order, setOrder] = useState([]);

    const location = useLocation();

    const id = location.pathname.split("/")[2];
    console.log(id);

    useEffect(() => {

        const fetchData = async () => {
            try {

                const { data } = await axios.get(`/api/orders/find/${id}`);
                console.log(data);
                setOrder(data);

            } catch (err) {
                toast.error('¡.Pedido NO Encontrado.!');
            }
        }
        fetchData();

    }, [id]);

    const uint1 = new Uint32Array([order.subTotal]);
    const uint2 = new Uint32Array([order.taxPrice]);
    const uint3 = new Uint32Array([order.totalPrice]);

    return (
        <main className="mt-5">
            <div className='container'>
                <section>
                    <div className="row">
                        {/* Heading */}
                        <div className="p-5 bg-light mb-4">
                            <div className="mb-6">
                                {/* heading */}
                                <h2 className="mb-0">Mis Pedidos. :*</h2>
                            </div>
                            {/* Breadcrumb */}
                            <nav className="d-flex">
                                <h6 className="mb-0">
                                    <Link className='go-back text-reset active' to='/account' rel='noopener noreferrer'>
                                        <span className='fas fa-arrow-circle-left'></span> Regresa.
                                    </Link>
                                    <hr className="my-10" />
                                    <h6 className="bill-title">
                                        <strong>
                                            # ID. :* {id}
                                        </strong>
                                    </h6>
                                </h6>
                            </nav>
                            {/* Breadcrumb */}
                        </div>
                        {/* Heading */}
                        <div className="col-md-6 gx-5 mb-4">
                            <div className="my-col">
                                <div className="bill-total">
                                    <div className="bill-group">
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                            Nombre. :*
                                        </span>
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                            {order.name}
                                        </span>
                                    </div>
                                    <div className="bill-group">
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                            Correo. :*
                                        </span>
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                            {order.email}
                                        </span>
                                    </div>
                                    <div className="bill-group">
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                            Dirección. :*
                                        </span>
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                            {order.address}
                                        </span>
                                    </div>
                                    <div className="bill-group">
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                            Teléfono. :*
                                        </span>
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                            {order.phone}
                                        </span>
                                    </div>
                                    <div className="bill-group mt">
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-warning mb-2">
                                            <span style={{ color: "black", fontSize: "15px" }} className="badge badge-warning mb-2">
                                                CONTACTAR EL VENDEDOR. :*
                                            </span>
                                            <a
                                                href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-success btn-large btn-block mb-2 py-2">
                                                <i className="fab fa-whatsapp" style={{ fontSize: "20px" }}></i> Comprar Por WhatsAPP.
                                            </a>
                                        </span>
                                    </div>
                                    {/*<div className="bill-group mt">
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                            Está Entregado. :*
                                        </span>
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                            {order.isDelivered === true ? ('True') : ('False')}
                                        </span>
                                    </div>
                                    <div className="bill-group">
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                            Está Pagado. :*
                                        </span>
                                        <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                            {order.isPaid === true ? ('True') : ('False')}
                                        </span>
                                    </div>*/}
                                    <div className="bill-group mt">
                                        <h4 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            SubTotal. :*
                                        </h4>
                                        <h4 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            {(uint1.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                        </h4>
                                    </div>
                                    <div className="bill-group">
                                        <h4 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            Impuesto. :*
                                        </h4>
                                        <h4 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            {(uint2.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                        </h4>
                                    </div>
                                    <div className="bill-group">
                                        <h4 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            Total. :*
                                        </h4>
                                        <h4 style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                            {(uint3.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 gx-5 mb-4">
                            <div className="my-col">
                                <div className="my-groups">
                                    <div className="bill-groups">
                                        <div className="w-groups">

                                            {
                                                order.orderItems?.map((item) => (
                                                    <MyOrderDetails key={item._id} item={item} />
                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default MyOrder;