import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyOrders = () => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

    const userId = userInfo._id;
    console.log(userId);

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const resultOrders = await axios.get(`/api/orders/mine/${userId}`);
            console.log(resultOrders.data);
            setOrders(resultOrders.data);
        }

        fetchData();

    }, [userId, navigate, userInfo]);

    return (
        <main className='mt-5'>
            <div className="container">
                <section>
                    <div className="row">
                        <div className="col-md-6 gx-5 mb-4">
                            <div className="mb-6">
                                {/* heading */}
                                <h2 className="mb-0">Mis Pedidos. :*</h2>
                            </div>
                            <div className="">
                                {
                                    orders.length === 0 ? (
                                        <h4 className='no-products'>
                                            ¡.Sin Pedidos.!
                                        </h4>
                                    ) : (
                                        <div className="">
                                            {
                                                orders.map((item) => (
                                                    <div className="" key={item._id}>
                                                        <h4
                                                            className="badge badge-secondary mb-2"
                                                            style={{ fontWeight: "bold", fontSize: "15px" }}>
                                                            <strong>
                                                                # ID. :* {item._id}
                                                            </strong>
                                                        </h4>
                                                        <Link to={`/order/${item._id}`} rel='noopener noreferrer'
                                                            className='badge badge-info mb-2'
                                                            style={{ fontWeight: "bold", fontSize: "15px" }}>
                                                            <FontAwesomeIcon icon={faEye} />
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default MyOrders;