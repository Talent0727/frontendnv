import React from 'react';
import Category from './Category';
import Price from './Price';
import Subcategory from './Subcategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShopFilter = ({ filterResult, category, subCategory, changeChecked, selectedPrice, changePrice }) => {
    return (
        <>
            <div id="cart-page-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Cart Table Area */}
                            <div className="cart-table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="pro-thumbnail">
                                                <span className="f-groupTitle badge badge-success text-black" style={{ fontSize: "15px" }}>
                                                    $ 0,00 - COP Hasta $ 9.999.000,00 - COP. :*
                                                </span>
                                            </th>
                                            <th className="pro-title">
                                                <span className="f-groupTitle badge badge-primary text-black" style={{ fontSize: "15px" }}>
                                                    Categor&#237;a. :*
                                                </span>
                                            </th>
                                            <th className="pro-price">
                                                <span className="f-groupTitle badge badge-primary text-black" style={{ fontSize: "15px" }}>
                                                    SubCategor&#237;a. :*
                                                </span>
                                            </th>
                                            <th className="pro-quantity">
                                                <span className="f-groupTitle badge badge-primary text-black" style={{ fontSize: "15px" }}>
                                                    Acc&#237;on. :*
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pro-thumbnail">
                                                <Price style={{ width: "90%" }} value={selectedPrice} changePrice={changePrice} />
                                            </td>
                                            <td className="pro-title">
                                                <Category filterResult={filterResult} category={category} />
                                            </td>
                                            <td className="pro-price">
                                                <Subcategory subCategory={subCategory} changeChecked={changeChecked} />
                                            </td>
                                            <td className="pro-quantity">
                                                <a className="f-groupTitle" href="/shop" rel="noopener noreferrer">
                                                    <code className='badge rounded-pill badge-dark f-groupTitle' style={{ fontSize: "15px" }}>
                                                        <FontAwesomeIcon icon="fa-solid fa-repeat" /> Cargar La P&#225;gina. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "15px" }} />
                                                    </code>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopFilter;