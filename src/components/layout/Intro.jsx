/* eslint-disable jsx-a11y/anchor-is-valid */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../style/BannerSlider.css';

const Intro = () => {

  const [banners, setBanners] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const resultBanner = await axios.get('/api/banners/all');
      console.log(resultBanner.data);
      setBanners(resultBanner.data);
    }

    fetchData();

  }, []);

  return (
    <>
      <div className="b-example-divider" style={{ marginTop: '100px' }}></div>
      {
        banners.length === 0 ? (
          <h3 className='no-data'>¡.Actualmente NO Hay Carrusel Para Deslizarse.!</h3>
        ) : (
          <div>
            {
              //only max latest banner
              banners.map((banner) => (
                <Carousel
                  className="main-slider"
                  infiniteLoop={true}
                  useKeyboardArrows
                  showThumbs={false}
                  showArrows={true}
                  fade={true}
                  pause={false}
                  autoPlay
                  interval={2000}
                  key={banner._id}>
                  <div style={{ backgroundColor: '#bdc3c787' }}>
                    <a rel="noopener noreferrer" className="flex">
                      <div>
                        {
                          banner.code ? banner.code :
                            <img
                              src={banner.image}
                              className='d-block w-100'
                              height={700}
                              width={600}
                              alt={banner.title}
                              title={banner.title} />
                        }
                      </div>
                    </a>
                    <div className="carousel-caption d-none d-md-block legend">
                      <p>
                        <h1 className="mb-3">
                          <span
                            className="special"
                            style={{
                              textAlign: "center",
                              color: "white",
                              borderRadius: "20px 20px",
                              padding: "2px 4px",
                              backgroundColor: 'rgb(0 0 0 / 12%)'
                            }}>
                            {banner.title}
                          </span>
                        </h1>
                        <h3 className="mb-3">
                          <span
                            className="badge badge-secondary"
                            style={{
                              textAlign: "center",
                              color: "white",
                              borderRadius: "20px 20px",
                              padding: "2px 4px",
                              backgroundColor: 'rgb(0 0 0 / 12%)'
                            }}>
                            {banner.description}
                          </span>
                          <p>
                            <span style={{ textAlign: "center", color: "white" }}>
                              {banner.author}
                            </span>
                          </p>
                          <p>
                            <span style={{ textAlign: "center", color: "white" }}>
                              {banner.createdAt.slice(0, 10)}
                            </span>
                          </p>
                        </h3>
                        <Link
                          to="/shop"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-lg m-2"
                          role="button">
                          Compra Ahora.
                        </Link>
                        <a
                          href="#blog"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-lg m-2"
                          role="button">
                          <FontAwesomeIcon icon={faChevronDown} />
                        </a>
                      </p>
                    </div>
                  </div>
                </Carousel >
              ))
            }
          </div>
        )
      }
    </>
  );
};

export default Intro;