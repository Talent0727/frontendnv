import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const resultAbout = await axios.get('/api/abouts/all');
      console.log(resultAbout.data);
      setAbouts(resultAbout.data);
    }

    fetchData();

  }, []);

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
                  <FontAwesomeIcon icon="fa-solid fa-gear" /> QUI&#201;NES SOMOS. :*
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
                      <FontAwesomeIcon icon="fa-solid fa-gear" /> QUI&#201;NES SOMOS. :*
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
                <p style={{ textAlign: "justify" }} lang="es">
                  {
                    abouts.length === 0 ? (
                      <h3 className='no-data'>¡.Actualmente NO Hay Acerca De.!</h3>
                    ) : (
                      <>
                        {
                          //only Acerca De latest about
                          abouts.map((about) => (
                            <div key={about._id}>
                              <div className="contentStickyImage">
                                <div className="AbouTimg">
                                  <div>
                                    <img
                                      src={about.imageOne}
                                      className="img-responsive img-rounded mx-auto d-block img-thumbnail"
                                      alt={about.titleOne}
                                      title={about.titleOne} />
                                  </div>
                                </div>
                                <div className="AbouTtext">
                                  <h1 className="AbouTtitle">
                                    <strong>
                                      <div>
                                        {about.titleOne}
                                      </div>
                                    </strong>
                                  </h1>
                                  <p className="about" style={{ textAlign: "justify" }}>
                                    {about.descriptionOne}
                                  </p>
                                  <h1 className="AbouTtitle">
                                    <strong>
                                      <div>
                                        {about.titleTwo}
                                      </div>
                                    </strong>
                                  </h1>
                                  <p className="about" style={{ textAlign: "justify" }}>
                                    {about.descriptionTwo}
                                  </p>
                                  <h1 className="AbouTtitle">
                                    <strong>
                                      <div>
                                        {about.titleThree}
                                      </div>
                                    </strong>
                                  </h1>
                                  <p className="about" style={{ textAlign: "justify" }}>
                                    {about.descriptionThree}
                                  </p>
                                </div>
                              </div>
                              <div className="contentStickyImage">
                                <div className="AbouTimg">
                                  <div>
                                    <img
                                      src={about.imageFour}
                                      className="img-responsive img-rounded mx-auto d-block img-thumbnail"
                                      alt={about.titleFour}
                                      title={about.titleFour} />
                                  </div>
                                </div>
                                <div className="AbouTtext">
                                  <h1 className="AbouTtitle">
                                    <strong>
                                      <div>
                                        {about.titleFour}
                                      </div>
                                    </strong>
                                  </h1>
                                  <p className="about" style={{ textAlign: "justify" }}>
                                    {about.descriptionFour}
                                  </p>
                                  <h1 className="AbouTtitle">
                                    <strong>
                                      <div>
                                        {about.titleFive}
                                      </div>
                                    </strong>
                                  </h1>
                                  <div className="AbouTimages">
                                    <Link to="https://www.instagram.com/nuryval10/" target={"_blank"} rel="noopener noreferrer">
                                      <div>
                                        <img
                                          src={about.imageMother}
                                          className="img-responsive img-rounded mx-auto d-block img-thumbnail"
                                          alt={about.titleFive}
                                          title={about.titleFive} />
                                      </div>
                                    </Link>
                                    <Link to="https://www.instagram.com/marianatamayov/" target={"_blank"} rel="noopener noreferrer">
                                      <div>
                                        <img
                                          src={about.imageDaughter}
                                          className="img-responsive img-rounded mx-auto d-block img-thumbnail"
                                          alt={about.titleFive}
                                          title={about.titleFive} />
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </>
                    )
                  }
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

export default About;
