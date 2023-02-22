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
        <div className='co-container'>
            <form onSubmit={orderProductHandler}>
                <h5 className='co-title'> DETALLES DE FACTURACIÓN. :* </h5>
                <hr className="mb-5" />
                <div className="close-form" onClick={() => setOpen(false)}>X</div>
                <div className="form-group">
                    <label htmlFor="name">Tu Nombre Completo. :*</label>
                    <input required type="text" onChange={(e) => setName(e.target.value)} id='name' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico. :*</label>
                    <input required type="text" onChange={(e) => setEmail(e.target.value)} id='email' />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Dirección. :*</label>
                    <input required type="text" onChange={(e) => setAddress(e.target.value)} id='address' />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Número De Teléfono Y Celular. :*</label>
                    <input required type="text" onChange={(e) => setPhone(e.target.value)} id='phone' />
                </div>
                <div className="co-btn">
                    <button type='submit'>Realizar Pedido. <FontAwesomeIcon icon={faTruck} /></button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;