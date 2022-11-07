import React, { Component } from 'react';
import Developers from './Developers';
import MissionStatment from './MissionStatement';
import styles from '../stylesheets/About.module.css';
import { Container } from 'react-bootstrap';
import AboutBlank from './AboutBlank';
import PlaylistAccordion from './PlaylistAccordion';

export default class About extends Component {
  render() {
    return (
      <>
        <Container classname={styles.aboutCont1}>
          <div classname={styles.devContainer}>
            Developers
            <Developers />
          </div>
          <div classname={styles.missionContainer}>
            <MissionStatment />
          </div>
        </Container>
        <Container classname={styles.aboutCont2}>
          <div>
           <AboutBlank />
          </div>
          <div>
          <PlaylistAccordion />
          </div>
        </Container>
      </>
    )
  }
};

