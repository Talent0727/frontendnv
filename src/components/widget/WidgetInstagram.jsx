import React from 'react';
import Iframe from 'react-iframe';

const WidgetInstagram = () => {
  return (
    <>
      {/*== Start Instagram Feed Area ==*/}
      <section id="instagram-feed-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="instagram-feed-thumb">
                <Iframe
                  url="https://www.instagram.com/nuryvalenzuelajoyeria/embed"
                  target="_blank" rel="noopener noreferrer"
                  width="100%"
                  height="1100px"
                  border={0}
                  display="block"
                  position="relative"
                  id="gmap_canvas"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                  className="mx-auto d-block mb-4"
                  allowtransparency="true" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*== End Instagram Feed Area ==*/}
    </>
  );
}

export default WidgetInstagram;