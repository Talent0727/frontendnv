import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeLocationItem from './HomeLocationItem';

const HomeLocation = () => {
  return (
    <>
      <main className="mt-5">
        <div className="container">
          {/*Section: Content*/}
          <section>
            <div className="row">
              <div className="col-md-12 gx-5 mb-4">
                <div className="page-header black-overlay">
                  <div className="container breadcrumb-section">
                    <div className="row pad-s15">
                      <>
                        <h2>
                          <FontAwesomeIcon icon="fa-solid fa-location-dot" /> CONTACTOS.
                        </h2>
                        <hr className="my-10" />
                        <p>
                          <span className="rounded-icon">
                            MI CORREO ES. :* <a
                              href="mailto:nuryvalenzuelajoyeria@gmail.com"
                              rel="noopener noreferrer"
                              className="text-muted">
                              <>
                                <i className="fab fa-telegram"></i> nuryvalenzuelajoyeria@gmail.com
                              </>
                            </a>
                          </span>
                        </p>
                      </>
                    </div>
                  </div>
                </div>
                <section className="page_single padTB100">
                  <div className="container">
                    <div className="row pad-s15">
                      <HomeLocationItem />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
          {/*Section: Content*/}
        </div>
      </main>
    </>
  );
};

export default HomeLocation;
