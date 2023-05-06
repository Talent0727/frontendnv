import React from 'react';
import { Link } from 'react-router-dom';
import LogoNV from '../assets/img/logonv.png';

const Footer = () => {
  return (
    <>
      {/*== Start Footer Section ===*/}
      <footer id="footer-area">
        {/* Start Newsletter Area */}
        <div className="newsletter-area-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="newsletter-content-wrap mt-3 mt-sm-0">
                  <p>
                    <div className="post-footer d-block d-sm-flex justify-content-sm-between align-items-center">
                      <ul className="tags">
                        <li>
                          <span>
                            Con&#233;ctate Con Nosotros En Las Redes Sociales. :*
                          </span>
                        </li>
                      </ul>
                      <div className="post-share mt-3 mt-sm-0">
                        {/* Instagram */}
                        <a className="text-reset" style={{ fontSize: "25px" }} href="https://www.instagram.com/nuryvalenzuelajoyeria/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                          <i className="fab fa-instagram" style={{ fontSize: "25px", color: "#ac2bac" }} />
                        </a>
                        {/* WhatsAPP */}
                        <a className="text-reset" style={{ fontSize: "25px" }} href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                          <i className="fab fa-whatsapp" style={{ fontSize: "25px", color: "#008000" }} />
                        </a>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Newsletter Area */}
        {/* Start Footer Widget Area */}
        <div className="footer-widget-wrapper">
          <div className="container">
            <div className="widget-content-wrap">
              <div className="row">
                {/* Start Single Footer Widget */}
                <div className="col-lg-4 col-sm-12">
                  <div className="single-footer-widget-wrap footer-about">
                    <a href="/" className="footerLogo">
                      <img
                        src={LogoNV}
                        className="site_logo"
                        width={200}
                        height={200}
                        alt="Nury Valenzuela&#174; Joyer&iacute;a &#124; Colombia."
                        title="Nury Valenzuela&#174; Joyer&iacute;a &#124; Colombia."
                        style={{ textAlign: "center" }}
                        lang="es" />
                    </a>
                    <address>
                      <p>
                        <Link to="/location" rel="noopener noreferrer" className="text-reset">
                          <i className="fa fa-angle-double-right wv_circle" /> Villavicencio, Meta, Am&#233;rica Del Sur.
                        </Link>
                      </p>
                      <hr className="my-2" />
                      <p>
                        <i className="fa fa-angle-double-right wv_circle" /> Correo: <a href="mailto:nuryvalenzuelajoyeria@gmail.com"
                          rel="noopener noreferrer" className="text-muted">
                          <span className="linkEnlace">
                            <i className="fab fa-telegram"></i> nuryvalenzuelajoyeria@gmail.com
                          </span>
                        </a>
                      </p>
                      <hr className="my-2" />
                      <p>
                        <i className="fa fa-angle-double-right wv_circle" /> Celular:  ESCR&#205;BENOS: <a className="text-reset" style={{ fontSize: "25px" }} href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                          <i className="fab fa-whatsapp" style={{ fontSize: "25px", color: "#008000" }} />
                        </a>
                      </p>
                    </address>
                  </div>
                </div>
                {/* End Single Footer Widget */}
                {/* Start Single Footer Widget */}
                <div className="col-lg-3 col-sm-6 col-md-3">
                  <div className="single-footer-widget-wrap">
                    <h3 className="widget-title">
                      MENU.
                    </h3>
                    <div className="widget-body">
                      <ul className="widget-list">
                        <li style={{ textAlign: "justify" }}>
                          <Link to="/" rel="noopener noreferrer" className="text-reset">
                            <i className="fa fa-angle-double-right wv_circle" /> Inicio.
                          </Link>
                        </li>
                        <li style={{ textAlign: "justify" }}>
                          <Link to="/shop" rel="noopener noreferrer" className="text-reset">
                            <i className="fa fa-angle-double-right wv_circle" /> Ver Tienda.
                          </Link>
                        </li>
                        <li style={{ textAlign: "justify" }}>
                          <Link to="/blogs" rel="noopener noreferrer" className="text-reset">
                            <i className="fa fa-angle-double-right wv_circle" /> Ver Blogs.
                          </Link>
                        </li>
                        <li style={{ textAlign: "justify" }}>
                          <Link to="/location" rel="noopener noreferrer" className="text-reset">
                            <i className="fa fa-angle-double-right wv_circle" /> Contactos.
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Single Footer Widget */}
                {/* Start Single Footer Widget */}
                <div className="col-lg-3 col-sm-6 col-md-3">
                  <div className="single-footer-widget-wrap">
                    <h3 className="widget-title">
                      &Aacute;REA LEGAL.
                    </h3>
                    <div className="widget-body">
                      <ul className="widget-list">
                        <li style={{ textAlign: "justify" }}>
                          <Link to="/options1" rel="noopener noreferrer" className="text-reset">
                            <i className="fa fa-angle-double-right wv_circle" /> T&#233;rminos y Condiciones.
                          </Link>
                        </li>
                        <li style={{ textAlign: "justify" }}>
                          <Link to="/options2" rel="noopener noreferrer" className="text-reset">
                            <i className="fa fa-angle-double-right wv_circle" /> Pol&#237;ticas De Envios, Cambios, Devoluciones Y
                            Garant&#237;as.
                          </Link>
                        </li>
                        <li style={{ textAlign: "justify" }}>
                          <Link to="/faq" rel="noopener noreferrer" className="text-reset">
                            <i className="fa fa-angle-double-right wv_circle" /> Preguntas Frecuentes.
                          </Link>
                        </li>
                        <li style={{ textAlign: "justify" }}>
                          <Link to="/abouts" rel="noopener noreferrer" className="text-reset">
                            <i className="fa fa-angle-double-right wv_circle" /> Qui&#233;nes Somos.
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Single Footer Widget */}
                {/* Start Single Footer Widget */}
                <div className="col-lg-2 col-sm-6 col-md-3">
                  <div className="single-footer-widget-wrap">
                    <h3 className="widget-title">
                      ACCEDER.
                    </h3>
                    <div className="widget-body">
                      <ul className="widget-list">
                        <li style={{ textAlign: "justify" }}>
                          <Link to="/login" rel="noopener noreferrer" className="text-reset">
                            <i className="fa fa-angle-double-right wv_circle" /> Inicia Sesi&oacute;n.
                          </Link>
                        </li>
                        <li style={{ textAlign: "justify" }}>
                          <Link to="/register" rel="noopener noreferrer" className="text-reset">
                            <i className="fa fa-angle-double-right wv_circle" /> Reg&#237;strarse.
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Single Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Widget Area */}
        {/* Start Footer Copyright Area */}
        <div className="footer-copyright-area">
          <div className="container">
            <div className="row">
              {/* Start Copyright Content */}
              <div className="col-sm-12 text-center">
                <div className="copyright-content mt-12 mt-sm-0">
                  <p>
                    CopyRight &copy; Nury Valenzuela&#174; Joyer&iacute;a &#124; Colombia. &#45; {new Date().getFullYear()}. &#124; Todos Los Derechos Reservados.
                  </p>
                </div>
              </div>
              {/* End Copyright Content */}
            </div>
          </div>
        </div>
        {/* End Footer Copyright Area */}
      </footer>
      {/*== End Footer Section ===*/}
    </>
  );
};

export default Footer;