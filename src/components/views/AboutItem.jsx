/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';

const AboutItem = ({ about }) => {
  return (
    <>
      <div id="about-page-wrapper" className="page-padding pb-0">
        <div className="container">
          {/* About Page Content Start */}
          <div className="row">
            {/* About Text Start */}
            <div className="col-lg-12 order-last order-lg-first">
              <div className="about-text-wrap">
                <p style={{ textAlign: "justify" }} lang="es">
                  <Link to={`/abouts/${about._id}`} rel="noopener noreferrer">
                    <div className="contentStickyImage">
                      <div className="AbouTimg">
                        <a href="#!" rel="noopener noreferrer">
                          <img
                            src={about.imageOne}
                            className="img-responsive img-rounded mx-auto d-block img-thumbnail"
                            alt={about.titleOne}
                            title={about.titleOne} />
                        </a>
                      </div>
                      <div className="AbouTtext">
                        <h1 className="AbouTtitle">
                          <strong>
                            <a href="#!" rel="noopener noreferrer">
                              {about.titleOne}
                            </a>
                          </strong>
                        </h1>
                        <p className="about" style={{ textAlign: "justify" }}>
                          {about.descriptionOne}
                        </p>
                        <h1 className="AbouTtitle">
                          <strong>
                            <a href="#!" rel="noopener noreferrer">
                              {about.titleTwo}
                            </a>
                          </strong>
                        </h1>
                        <p className="about" style={{ textAlign: "justify" }}>
                          {about.descriptionTwo}
                        </p>
                        <h1 className="AbouTtitle">
                          <strong>
                            <a href="#!" rel="noopener noreferrer">
                              {about.titleThree}
                            </a>
                          </strong>
                        </h1>
                        <p className="about" style={{ textAlign: "justify" }}>
                          {about.descriptionThree}
                        </p>
                      </div>
                    </div>
                    <div className="contentStickyImage">
                      <div className="AbouTimg">
                        <a href="#!" rel="noopener noreferrer">
                          <img
                            src={about.imageFour}
                            className="img-responsive img-rounded mx-auto d-block img-thumbnail"
                            alt={about.titleFour}
                            title={about.titleFour} />
                        </a>
                      </div>
                      <div className="AbouTtext">
                        <h1 className="AbouTtitle">
                          <strong>
                            <a href="#!" rel="noopener noreferrer">
                              {about.titleFour}
                            </a>
                          </strong>
                        </h1>
                        <p className="about" style={{ textAlign: "justify" }}>
                          {about.descriptionFour}
                        </p>
                        <h1 className="AbouTtitle">
                          <strong>
                            <a href="#!" rel="noopener noreferrer">
                              {about.titleFive}
                            </a>
                          </strong>
                        </h1>
                        <div className="AbouTimages">
                          <Link to="https://www.instagram.com/nuryval10/" target={"_blank"} rel="noopener noreferrer">
                            <a href="#!" rel="noopener noreferrer">
                              <img
                                src={about.imageMother}
                                className="img-responsive img-rounded mx-auto d-block img-thumbnail"
                                alt={about.titleFive}
                                title={about.titleFive} />
                            </a>
                          </Link>
                          <Link to="https://www.instagram.com/marianatamayov/" target={"_blank"} rel="noopener noreferrer">
                            <a href="#!" rel="noopener noreferrer">
                              <img
                                src={about.imageDaughter}
                                className="img-responsive img-rounded mx-auto d-block img-thumbnail"
                                alt={about.titleFive}
                                title={about.titleFive} />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
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
}

export default AboutItem;