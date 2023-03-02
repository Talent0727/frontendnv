import React from 'react';
import LogoNV from '../assets/img/Logonv.png';

const Logo = () => {
  return (
    <>
      <section className="wa-partners padTB100" style={{ marginTop: '100px' }}>
        <div className="container">
          <div className="row">
            {/*//==Section Heading Start==//*/}
            <div className="col-md-12">
              <div className="centered-title text-center">
                <h2>NUESTRA EMPRESA.<span className="heading-border" /></h2>
              </div>
            </div>
            {/*//==Section Heading End==//*/}
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="wa-theme-design-block">
                    <figure className="dark-theme text-center">
                      <img
                        src={LogoNV}
                        className="site_logo"
                        alt="Nury Valenzuela."
                        title="Nury Valenzuela."
                        style={{ textAlign: "center" }}
                        lang="es" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Logo;
