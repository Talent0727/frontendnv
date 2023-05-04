/* eslint-disable jsx-a11y/anchor-is-valid */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../style/BannerSlider.css';

const IntroItem = ({ banner }) => {
  return (
    <>
      <Carousel className='main-slider' infiniteLoop useKeyboardArrows showThumbs={false} showArrows={true} fade={true} pause={false} autoPlay interval={2000}>
        <div style={{ backgroundColor: '#bdc3c787' }}>
          <a rel="noopener noreferrer" className="flex">
            <div>
              <img
                src={banner.image}
                className='d-block w-100'
                height={700}
                width={600}
                alt={banner.title}
                title={banner.title} />
            </div>
          </a>
          <div className="carousel-caption d-none d-md-block legend">
            <p>
              <h1 className="mb-3">
                <span className="special" style={{ textAlign: "center", color: "white", borderRadius: "20px 20px", padding: "2px 4px", backgroundColor: 'rgb(0 0 0 / 12%)' }}>
                  {banner.title}
                </span>
              </h1>
              <h3 className="mb-3">
                <span className="badge badge-secondary" style={{ textAlign: "center", color: "white", borderRadius: "20px 20px", padding: "2px 4px", backgroundColor: 'rgb(0 0 0 / 12%)' }}>
                  {banner.description}
                </span>
                <p><span style={{ textAlign: "center", color: "white" }}>{banner.author}</span></p>
                <p><span style={{ textAlign: "center", color: "white" }}>{banner.createdAt.slice(0, 10)}</span></p>
              </h3>
              <Link to="/shop" rel="noopener noreferrer" className="btn btn-secondary btn-lg m-2" role="button">
                Compra Ahora.
              </Link>
              <a href="#blog" rel="noopener noreferrer" className="btn btn-secondary btn-lg m-2" role="button">
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default IntroItem;