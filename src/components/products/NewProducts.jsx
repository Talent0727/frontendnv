import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { faEye, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../../style/index.css';

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
              <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                          IMAGEN.
                        </th>
                        <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                          NOMBRE.
                        </th>
                        <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                          MEN&#218; 1 CATEGOR&#205;A.
                        </th>
                        <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                          MEN&#218; 2 CATEGOR&#205;A.
                        </th>
                        <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                          MEN&#218; 3 CATEGOR&#205;A.
                        </th>
                        <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                          PRECIO.
                        </th>
                        <th scope="col" className="px-6 py-3" style={{ fontSize: "15px" }}>
                          VER PRODUCTO.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        products.length === 0 ? (
                          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="font-medium no-data" style={{ fontSize: "15px" }}>
                              ¡.Actualmente NO Hay Productos.!
                            </span>
                          </div>
                        ) : (
                          <>
                            {
                              products.slice(-10).map((product) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={product._id}>
                                  <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link to={`/product/${product._id}`} rel="noopener noreferrer">
                                      <img
                                        src={product.image}
                                        className="img-responsive img-rounded mx-auto d-block img-thumbnail"
                                        width={200}
                                        height={200}
                                        alt={product.title}
                                        title={product.title} />
                                    </Link>
                                  </th>
                                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <span className='badge badge-info mb-2 text-black' style={{ fontSize: "15px" }}>
                                      {product.title}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                      {product.categoryOptions}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                      {product.subcategoryOptions}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "15px" }}>
                                      {product.tripletecategoryOptions}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <span className="price">
                                      <em>
                                        <b style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                                          {(product.price).toLocaleString('es-CO', {
                                            style: 'currency',
                                            currency: 'COP',
                                          })}
                                        </b>
                                      </em>
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <Link to={`/product/${product._id}`} rel="noopener noreferrer">
                                      <span className='badge badge-secondary mb-2 text-black' style={{ fontSize: "15px" }}>
                                        <FontAwesomeIcon icon={faEye} /> VER PRODUCTO.
                                      </span>
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                          </>
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </div>
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