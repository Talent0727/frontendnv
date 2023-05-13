import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/index.css';

const NewProduct = ({ product }) => {
  const uint8 = new Uint32Array([product.price]);
  return (
    <>
      <div className="products-wrapper">
        <div className="products-carousel-wrap">
          <Link to={`/product/${product._id}`} rel="noopener noreferrer">
            {/* Start Single Product */}
            <div className="single-product-item" style={{ width: '18rem' }}>
              {/* Product Thumbnail */}
              <figure className="product-thumbnail">
                <a href="#!" className="d-block" rel="noopener noreferrer">
                  <img
                    src={product.image}
                    className="primary-thumb img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail img-blog"
                    alt={product.title}
                    title={product.title} />
                  {product.imagesOnes?.map((item) => (
                    <img src={`${item.value}`} className='secondary-thumb img-blog' alt={product.title} title={product.title} key={item.i} />
                  ))}
                </a>
                <figcaption className="product-hvr-content">
                  <a href="#!" className="btn btn-brand btn-quickView" rel="noopener noreferrer">
                    <span className='list-group-item px-4 badge badge-dark text-center mb-2' style={{ textAlign: "center", borderRadius: "20px" }}>
                      <i className="fas fa-eye"></i> Ver Producto.
                    </span>
                  </a>
                </figcaption>
              </figure>
              {/* Product Details */}
              <div className="product-details">
                <a href="#!" className="product-cat-name" rel="noopener noreferrer">
                  <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "10px" }}>
                    {product.categoryOptions}
                  </span>
                </a><br />
                <a href="#!" className="product-cat-name" rel="noopener noreferrer">
                  <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "10px" }}>
                    {product.subcategoryOptions}
                  </span>
                </a><br />
                <a href="#!" className="product-cat-name" rel="noopener noreferrer">
                  <span className='badge badge-danger mb-2 text-black' style={{ fontSize: "10px" }}>
                    {product.tripletecategoryOptions}
                  </span>
                </a>
                <h2 className="product-name">
                  <a href="#!" rel="noopener noreferrer">
                    <span className='badge badge-info mb-2 text-black' style={{ fontSize: "10px" }}>
                      {product.title}
                    </span>
                  </a>
                </h2>
                <div className="product-prices">
                  <span className="price">
                    <em>
                      <b style={{ color: "green", fontSize: "15px" }} className="badge badge-success mb-2">
                        {(uint8.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                      </b>
                    </em>
                  </span>
                </div>
              </div>
            </div>
            {/* End Single Product */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewProduct;