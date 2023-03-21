import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeLocationItem from './HomeLocationItem';

const HomeLocation = () => {
  return (
    <>
      <div className="b-example-divider" style={{ marginTop: '100px' }}></div>
      {/*== Start Page Header ==*/}
      <div id="page-header-wrapper">
        <div className="container">
          <div className="row">
            {/* Page Title Area Start */}
            <div className="col-6">
              <div className="page-title-wrap">
                <h1>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" /> CONTACTOS. :*
                </h1>
              </div>
            </div>
            {/* Page Title Area End */}
            {/* Page Breadcrumb Start */}
            <div className="col-6 m-auto">
              <nav className="page-breadcrumb-wrap">
                <ul className="nav justify-content-end">
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      INICIO.
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="current" rel="noopener noreferrer">
                      <FontAwesomeIcon icon="fa-solid fa-location-dot" /> CONTACTOS. :*
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Page Breadcrumb End */}
          </div>
        </div>
      </div>
      {/*== End Page Header ==*/}
      <div id="about-page-wrapper" className="page-padding pb-0">
        <div className="container">
          {/* About Page Content Start */}
          <div className="row">
            {/* About Text Start */}
            <div className="col-lg-12 order-last order-lg-first">
              <div className="about-text-wrap">
                <p>
                  <HomeLocationItem />
                </p>
              </div>
            </div>
            {/* About Text End */}
          </div>
          {/* About Page Content End */}
        </div>
      </div>
    </>
  );
};

export default HomeLocation;
