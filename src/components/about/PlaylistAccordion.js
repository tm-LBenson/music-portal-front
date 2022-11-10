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
              Mavericks - ikabodVEINS,
              Cannabliss - Baker Ya Maker,
              Ditty - Freddie Dredd,
              Paper - Nell,
              WXXD16 - Blokka $oLO,
              Neva Slippin' - Baker Ya Maker,
              Wrath - Freddie Dredd,
              Kill'em All - Baker Ya Maker,
              Maschenny - Purely Blue,
              Snake - Freddie Dredd,
              Hxly Ghx$t - Blokka $oLO,
              HH$mL - Blokka $oLO,
              When I Touch - Baker Ya Maker,
              CH1RP - Blokka $oLO,
              Sumn Hard - Doddy Gatz,
              Cash In Cash Out - Pharrell Williams,
              Cold World - Iceberg Black,
              MXB - Blokka $oLO,
              Killin' On Demand - Freddie Dredd,
              Hero - Yvncc,
              Cry Of Fear - Baker Ya Maker,
              Greed - Freddie Dredd,
              PXW6R - Blokka $oLO,
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
