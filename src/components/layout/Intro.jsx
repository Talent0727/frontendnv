import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <>
      <div id="intro-example" className="p-5 text-center bg-image" style={{ backgroundImage: 'url("https://images.pexels.com/photos/2942855/pexels-photo-2942855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}>
        <div className="mask" style={{ backgroundColor: '#bdc3c787' }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">
                <span className="special" style={{ textAlign: "center", color: "white", borderRadius: "20px 20px", padding: "2px 4px", backgroundColor: 'rgb(0 0 0 / 12%)' }}>
                  Nury Valenzuela.
                </span>
              </h1>
              <Link to="/shop" rel="noopener noreferrer" className="btn btn-secondary btn-lg m-2" role="button">
                Compra Ahora.
              </Link>
              <a href="#blog" rel="noopener noreferrer" className="btn btn-secondary btn-lg m-2" role="button">
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;