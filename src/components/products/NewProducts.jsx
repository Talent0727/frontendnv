import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewProduct from './NewProduct';
import { faEye, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NewProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const resultProducts = await axios.get('/api/products/all');
      console.log(resultProducts.data);
      setProducts(resultProducts.data);
    }

    fetchData();

  }, []);

  return (
    <div className='npc-container'>
      <div className="npc-row">
        <h2 className="npc-title">
          <FontAwesomeIcon icon={faBagShopping} /> PRODUCTOS NUEVOS Y DESTACADOS.
        </h2>
      </div>
      <div className="hb-col">
        <Link to='/shop' rel='noopener noreferrer' className='hb-more badge badge-secondary mb-2' style={{ fontSize: "20px" }}>
          Ver Todos Los Productos. <FontAwesomeIcon icon={faEye} />
        </Link>
      </div>
      <div className="hb-row">
        <div className="hb-col">
          <div className="hb-blogDiv">

            {
              products.length === 0 ? (
                <h3 className='no-data'>¡.Actualmente NO Hay Productos.!</h3>
              ) : (
                <div className="npc-groups">
                  {
                    //only 4 latest
                    products.slice(-15).map((product) => (
                      <NewProduct key={product._id} product={product} />
                    ))
                  }
                </div>
              )
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;