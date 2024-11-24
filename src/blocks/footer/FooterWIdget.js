import React from 'react';

import FooterMenu from '../footer/FooterMenu';

const FooterWidget = () => {
    return (
      <div className="footer-widgets">
          <div className="footer-widget-area d-flex flex-wrap">
              {/* Section "À propos de nous" */}
              <div className="widget">
                  <h5 className="widget-title">À propos de nous</h5>

                  <p>
                      Elite Cargo est une société spécialisée dans la logistique, le fret aérien et maritime, 
                      le transit, et le déménagement international, avec plus de 15 ans d'expérience.
                  </p>
              </div>

              {/* Section "Menu" */}
              <div className="widget">
                  <h5 className="widget-title">Menu</h5>

                  <FooterMenu />
              </div>

              {/* Section "Contacts" */}
              <div className="widget">
                  <h5 className="widget-title">Contacts</h5>

                  <p>Aéroport International Ahmed Sékou Touré, Conakry, Guinée</p>

                  <p><a href="mailto:info@elitecargo.com">info@elitecargo.com</a></p>

                  <p>+224 622-00-00-00</p>
              </div>
          </div>
      </div>
    );
};

export default FooterWidget;
