import React from 'react';
import Category from './Category';
import Price from './Price';
//import Star from './Star';
import Subcategory from './Subcategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShopFilter = ({ filterResult, category, filterResultRatings, rating, subCategory, changeChecked, selectedPrice, changePrice }) => {
    return (
        <>
            <div className='table-responsive'>
                <table className="table align-middle mb-0 bg-white">
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="ms-12">
                                        <p className="fw-bold mb-1">
                                            <div className='f-group'>
                                                <span className="f-groupTitle badge badge-success" style={{ fontSize: "15px" }}>
                                                    $ 0,00 - COP Hasta $ 9.999.000,00 - COP. :*
                                                </span>
                                                <hr className="my-2" />
                                                <Price style={{ width: "90%" }} value={selectedPrice} changePrice={changePrice} />
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="ms-12">
                                        <p className="fw-normal mb-1">
                                            <div className='f-group'>
                                                <span className="f-groupTitle badge badge-primary" style={{ fontSize: "15px" }}>
                                                    Categoría. :*
                                                </span>
                                                <hr className="my-2" />
                                                <Category filterResult={filterResult} category={category} />
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="ms-12">
                                        <p className="fw-normal mb-1">
                                            <div className='f-group'>
                                                <span className="f-groupTitle badge badge-primary" style={{ fontSize: "15px" }}>
                                                    SubCategoría. :*
                                                </span>
                                                <hr className="my-2" />
                                                <Subcategory subCategory={subCategory} changeChecked={changeChecked} />
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="ms-12">
                                        <p className="fw-bold mb-1">
                                            <div className='f-group'>
                                                <span className="f-groupTitle badge badge-primary" style={{ fontSize: "15px" }}>
                                                    Cargar La Página. :*
                                                </span>
                                                <hr className="my-2" />
                                                <a className="btn btn-secondary btn-lg f-groupTitle" href="/shop" rel="noopener noreferrer">
                                                    <code className='badge rounded-pill badge-dark f-groupTitle' style={{ fontSize: "15px" }}>
                                                        <FontAwesomeIcon icon="fa-solid fa-repeat" /> Cargar La Página. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "15px" }} />
                                                    </code>
                                                </a>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">
                                    {/*<div className='f-group'>
                                        <span className="f-groupTitle badge badge-warning" style={{ fontSize: "15px" }}>
                                            Clasificación De Estrellas. :*
                                        </span>
                                        <Star filterResultRatings={filterResultRatings} rating={rating} />
                                    </div>*/}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ShopFilter;