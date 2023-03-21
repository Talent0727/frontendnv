import React from 'react';
import aboutA1 from '../assets/img/aboutA1.jpg';
import aboutA2 from '../assets/img/aboutA2.jpg';
import aboutA3 from '../assets/img/aboutA3.jpg';
import aboutA4 from '../assets/img/aboutA4.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
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
                  <div className="contentStickyImage">
                    <div className="AbouTimg">
                      <img src={aboutA1} className="img-responsive img-rounded mx-auto d-block img-thumbnail" alt="Nury Valenzuela." title="Nury Valenzuela." />
                    </div>
                    <div className="AbouTtext">
                      <h1 className="AbouTtitle"><strong>QUI&#201;NES SOMOS</strong></h1>
                      <p className="about" style={{ textAlign: "justify" }}>
                        La imagen detr&#225;s de Nury Valenzuela, soy una mujer real motivada por el deseo de transmitir el arte a todos nuestros clientes.
                        <br />
                        Nuestro nacimiento e historia ha sido un camino lleno de amor y F&#233; en Dios a quien debo mi &#233;xito y reconocimiento, Dios ha sido mi fuerza en cada decisi&#243;n y paso que he dado, &#201;l es el verdadero dueño de mi talento.
                        <br />
                        Las joyas que hoy se fabrican bajo mi nombre son el resultado de la disciplina y organización que me ha caracterizado desde muy corta edad, hoy puedo ser ejemplo para otras generaciones de que el trabajo incansable y honesto al final siempre da frutos, con Nury Valenzuela puedo ver materializado mis objetivos y el poder de Dios porque fue &#201;l quien me llev&#243; m&#225;s lejos que mis propios sueños, es por eso que tengo claro que cada prueba que me ha puesto la vida me ha servido de inspiraci&#243;n para plasmar mis sentimientos en una joya de alta calidad.
                        <br />
                        Este m&#225;gico proyecto fue escrito y dedicado a Dios para que siempre hiciera Memoria delante de &#201;l.
                      </p>
                      <h1 className="AbouTtitle"><strong>VISI&#211;N</strong></h1>
                      <p className="about" style={{ textAlign: "justify" }}>
                        Convertimos en una empresa reconocida a nivel internacional destac&#225;ndonos por nuestros diseños y atenci&#243;n de calidad, logrando fortalecer en nuestros clientes su seguridad y autoestima.
                      </p>
                      <h1 className="AbouTtitle"><strong>MISI&#211;N</strong></h1>
                      <p className="about" style={{ textAlign: "justify" }}>
                        Somos una joyer&#237;a colombiana, dedicada al diseño de calidad, innovador y elegante, con el prop&#243;sito de resaltar la belleza de los hombres y mujeres que lucen nuestras piezas.
                      </p>
                    </div>
                  </div>
                  <div className="contentStickyImage">
                    <div className="AbouTimg">
                      <img src={aboutA2} className="img-responsive img-rounded mx-auto d-block img-thumbnail" alt="Mariana Tamayo." title="Mariana Tamayo." />
                    </div>
                    <div className="AbouTtext">
                      <h1 className="AbouTtitle"><strong>NUESTRO EQUIPO</strong></h1>
                      <p className="about" style={{ textAlign: "justify" }}>
                        Mi ejemplo ha determinado el futuro de mi hija quien es ahora mi mano derecha, ella adopt&#243; este arte con todo su amor y decidi&#243; repartir sus d&#237;as entre la vocaci&#243;n por la medicina y la joyer&#237;a de alta calidad, ella es mi mejor equipo, mi inspiraci&#243;n y mi orgullo.
                        <br />
                        Hoy Nury Valenzuela es el reflejo del amor m&#225;s real que existe. El amor entre una Madre y su hija, sin dejar de lado que este m&#225;gico proyecto ser&#225; a mediano plazo un amor de tres.
                      </p>
                      <h2 className="AbouTtitle"><strong>EQUIPO</strong></h2>
                      <div className="AbouTimages">
                        <Link to="https://www.instagram.com/nuryval10/" target={"_blank"} rel="noopener noreferrer">
                          <img src={aboutA3} className="img-responsive img-rounded mx-auto d-block img-thumbnail" alt="Nury Valenzuela." title="Nury Valenzuela." />
                        </Link>
                        <Link to="https://www.instagram.com/marianatamayov/" target={"_blank"} rel="noopener noreferrer">
                          <img src={aboutA4} className="img-responsive img-rounded mx-auto d-block img-thumbnail" alt="Mariana Tamayo." title="Mariana Tamayo." />
                        </Link>
                      </div>
                    </div>
                  </div>
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
