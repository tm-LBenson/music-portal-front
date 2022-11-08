import React, { Component } from 'react';
import Developers from './Developers';
import MissionStatment from './MissionStatement';
import { Container } from 'react-bootstrap';
import AboutBlank from './AboutBlank';
import PlaylistAccordion from './PlaylistAccordion';
import styles from '../stylesheets/About.module.css';

export default class About extends Component {
  render() {
    return (
      <>
      <Container className={styles['about-cont-3']}>
        <Container className={styles['about-cont-1']}>
          <div className={styles['dev-container']}>
            <p className={styles['dev-cont-title']}>Developers</p>
            <Developers />
          </div>
          <div className={styles['mission-container']}>
            <MissionStatment />
          </div>
        </Container>
        <Container className={styles['about-cont-2']}>
          <div>
           <AboutBlank />
          </div>
          <div>
          <PlaylistAccordion />
          </div>
        </Container>
        </Container>
      </>
    )
  }
};

