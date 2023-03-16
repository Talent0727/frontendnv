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
    <>
      {/*== Start Top Interesting Product Area ==*/}
      <section id="products-area-wrapper">
        <div className="container">
          {/* Start Section Title Area */}
          <div className="row">
            <div className="col-lg-6 m-auto text-center">
              <div className="section-title-wrap">
                <h2>
                  <FontAwesomeIcon icon={faBagShopping} /> TOP INTERESANTE.
                </h2>
                <p style={{ textAlign: "justify" }}>
                  Explore la colecci&#243;n de nuestros productos m&#225;s vendidos y m&#225;s interesantes. Seguro que encuentras lo que buscas.
                </p>
                <div className="hb-col" style={{ marginTop: '20px' }}>
                  <Link to='/shop' rel='noopener noreferrer' className='hb-more badge badge-secondary mb-2' style={{ fontSize: "20px" }}>
                    Ver Productos. <FontAwesomeIcon icon={faEye} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End Section Title Area */}
          {/* Start Products Content Wrapper */}
          <div className="row">
            <div className="col-lg-12">
              <>

                {
                  products.length === 0 ? (
                    <h3 className='no-data'>¡.Actualmente NO Hay Productos.!</h3>
                  ) : (
                    <div className="npc-groups">
                      {
                        //only 4 latest
                        products.slice(-10).map((product) => (
                          <NewProduct key={product._id} product={product} />
                        ))
                      }
                    </div>
                  )
                }

              </>
            </div>
          </div>
          {/* End Products Content Wrapper */}
        </div>
      </section>
      {/*== End Top Interesting Product Area ==*/}
    </>
  );
};

export default NewProducts;