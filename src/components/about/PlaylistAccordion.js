import React, { Component } from 'react';
import styles from '../stylesheets/About.module.css'
import Accordion from 'react-bootstrap/Accordion';


export default class AboutBlank extends Component {
  render() {
    return (
      <div className={styles['playlist-accordion']}>
        <Accordion variant='success'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Lewis Playlist</Accordion.Header>
            <Accordion.Body>
              Playlist goes here
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Steven Playlist</Accordion.Header>
            <Accordion.Body>
              Playlist goes here
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Trace Playlist</Accordion.Header>
            <Accordion.Body>
              1. Mavericks - ikabodVEINS, 
              2. Cannabliss - Baker Ya Maker, 
              3. High As F**k - Baker Ya Maker, 
              4. Ditty - Freddie Dredd, 
              5. Paper - Nell, 
              6. WXXD16 - Blokka $oLO, 
              7. Neva Slippin' - Baker Ya Maker, 
              8. Wrath - Freddie Dredd, 
              9. Kill'em All - Baker Ya Maker, 
              10. Maschenny - Purely Blue, 
              11. Snake - Freddie Dredd, 
              12. Hxly Ghx$t - Blokka $oLO, 
              13. HH$mL - Blokka $oLO, 
              14. When I Touch - Baker Ya Maker, 
              15. CH1RP - Blokka $oLO, 
              16. Sumn Hard - Doddy Gatz, 
              17. Cash In Cash Out - Pharrell Williams, 
              18. Cold World - Iceberg Black, 
              19. MXB - Blokka $oLO, 
              20. Killin' On Demand - Freddie Dredd, 
              21. Hero - Yvncc, 
              22. Cry Of Fear - Baker Ya Maker, 
              23. Greed - Freddie Dredd, 
              24. PXW6R - Blokka $oLO, 
              25. Break S**t - Jasiah
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Zoe Playlist</Accordion.Header>
            <Accordion.Body>
              Playlist goes here
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        );
      </div>
    )
  };
}
