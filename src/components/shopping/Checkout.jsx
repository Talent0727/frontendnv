import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ setOpen, cartItems, subTotal, taxPrice, totalPrice }) => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

    const userId = userInfo._id;
    console.log(userId);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [marker, setMarker] = useState('');
    const [comment, setComment] = useState('');

    const orderProductHandler = async (e) => {
        e.preventDefault();

        try {

            const { data } = await axios.post('/api/orders', {

                orderItems: cartItems,
                userId: userId,
                name: name,
                email: email,
                address: address,
                phone: phone,
                marker: marker,
                comment: comment,
                subTotal: subTotal,
                taxPrice: taxPrice,
                totalPrice: totalPrice
            });

            if (data) {
                localStorage.removeItem('cartItems');
                setOpen(false);
                toast.success('¡.Has Pedido Con Éxito.!');
                navigate('/account');
            }

        } catch (err) {

            toast.error('¡.Pedido Fallido.!');

        }

    }

    return (
        <div className='co-container' style={{ marginTop: '0%' }}>
            <form onSubmit={orderProductHandler}>
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                            DETALLES DE FACTURACI&#211;N. :*
                        </h2>
                        <hr className="my-3" />
                        <div className="close-form" onClick={() => setOpen(false)}>X</div>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                        Nombre Completo. :*
                                    </span>
                                </label>
                                <input type="text" onChange={(e) => setName(e.target.value)} name="name" id='name' placeholder='Nombre Completo. :*' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                        Correo Electr&#243;nico. :*
                                    </span>
                                </label>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" id='email' placeholder='Correo Electrónico. :*' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                            </div>
                            <div className="w-full">
                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                        Direcci&#243;n. :*
                                    </span>
                                </label>
                                <input type="text" onChange={(e) => setAddress(e.target.value)} name="address" id='address' placeholder='Dirección. :*' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                            </div>
                            <div className="w-full">
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                        N&#250;mero De Tel&#233;fono Y Celular. :*
                                    </span>
                                </label>
                                <input type="text" onChange={(e) => setPhone(e.target.value)} name="phone" id='phone' placeholder='Número De Teléfono Y Celular. :*' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="marker" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                        Detalle. :*
                                    </span>
                                </label>
                                <select onChange={(e) => setMarker(e.target.value)} id='marker' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="" disabled selected>--- Seleccionar ---</option>
                                    <option value="Pendiente De Pago">
                                        Pendiente De Pago
                                    </option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <span style={{ color: "black", fontSize: "15px" }} className="badge badge-secondary mb-2">
                                        Comentarios. :*
                                    </span>
                                </label>
                                <textarea id="comment" cols={100} rows={100} required onChange={(e) => setComment(e.target.value)} placeholder="Comentarios. :*" spellCheck={false} style={{ height: 150, textAlign: "justify" }} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={""} />
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center mt-4 sm:mt-6 text-white bg-primary-700 hover:bg-primary-800 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" style={{ fontSize: "15px" }}>
                            <FontAwesomeIcon icon={faTruck} /> Realizar Pedido.
                        </button>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default Checkout;