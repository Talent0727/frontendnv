import React from 'react';
import Category from './Category';
import Price from './Price';
import Star from './Star';
import Subcategory from './Subcategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShopFilter = ({ filterResult, category, filterResultRatings, rating, subCategory, changeChecked, selectedPrice, changePrice }) => {
    return (
        <>
            <div className='f-group'>
                <span className="f-groupTitle badge text-bg-primary" style={{ fontSize: "15px" }}>
                    Cargar La Página. :*
                </span>
                <a className="btn btn-secondary btn-lg" href="/shop" rel="noopener noreferrer">
                    <code className='badge rounded-pill badge-dark' style={{ fontSize: "15px" }}>
                        <FontAwesomeIcon icon="fa-solid fa-repeat" /> Cargar La Página. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "15px" }} />
                    </code>
                </a>
            </div>
            <div className='f-group'>
                <span className="f-groupTitle badge text-bg-primary" style={{ fontSize: "15px" }}>
                    Categoría. :*
                </span>
                <Category filterResult={filterResult} category={category} />
            </div>
            <div className='f-group'>
                <span className="f-groupTitle badge text-bg-primary" style={{ fontSize: "15px" }}>
                    SubCategoría. :*
                </span>
                <Subcategory subCategory={subCategory} changeChecked={changeChecked} />
            </div>
            <div className='f-group'>
                <span className="f-groupTitle badge text-bg-secondary" style={{ fontSize: "15px" }}>
                    $ 0 - COP Hasta $ 6.000.000 - COP. :*
                </span>
                <Price value={selectedPrice} changePrice={changePrice} />
            </div>
            <div className='f-group'>
                <span className="f-groupTitle badge text-bg-warning" style={{ fontSize: "15px" }}>
                    Clasificación De Estrellas. :*
                </span>
                <Star filterResultRatings={filterResultRatings} rating={rating} />
            </div>
        </>
    );
};

export default ShopFilter;