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
        <div className='co-container' style={{ marginTop: '120px' }}>
            <form onSubmit={orderProductHandler}>
                <h5 className='co-title'> DETALLES DE FACTURACI&#211;N. :* </h5>
                <div className="close-form" onClick={() => setOpen(false)}>X</div>
                <div className="form-group">
                    <label htmlFor="name">Nombre Completo. :*</label>
                    <input required type="text" onChange={(e) => setName(e.target.value)} id='name' placeholder='Nombre Completo. :*' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electr&#243;nico. :*</label>
                    <input required type="text" onChange={(e) => setEmail(e.target.value)} id='email' placeholder='Correo Electrónico. :*' />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Direcci&#243;n. :*</label>
                    <input required type="text" onChange={(e) => setAddress(e.target.value)} id='address' placeholder='Dirección. :*' />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">N&#250;mero De Tel&#233;fono Y Celular. :*</label>
                    <input required type="text" onChange={(e) => setPhone(e.target.value)} id='phone' placeholder='Número De Teléfono Y Celular. :*' />
                </div>
                <p>
                    <label htmlFor="marker">
                        Detalle. :*
                    </label>
                    <div className="form-floating mb-3">
                        <select className="form-control form-select form-select-lg mb-3 is-valid" aria-label=".form-select-lg example" onChange={(e) => setMarker(e.target.value)} id='marker' required>
                            <option value="" disabled selected>--- Seleccionar ---</option>
                            <option value="Pendiente De Pago">
                                Pendiente De Pago
                            </option>
                        </select>
                        <label htmlFor="marker">
                            Detalle. :*
                        </label>
                    </div>
                </p>
                <div className="co-btn">
                    <button type='submit'>Realizar Pedido. <FontAwesomeIcon icon={faTruck} /></button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;