import React, { Component } from 'react';
import Developers from './Developers';
import MissionStatment from './MissionStatement';
import AboutBlank from './AboutBlank';
import PlaylistAccordion from './PlaylistAccordion';
import styles from '../stylesheets/About.module.css';

export default class About extends Component {
  render() {
    return (
      <>
        <main className={styles['about-cont-3']}>
          <section className={styles['about-cont-1']}>
              <h1 className={styles['dev-cont-title']}>Developers</h1>
            <div className={styles['dev-container']}>
              <Developers />
            </div>
            <div className={styles['mission-container']}>
              <MissionStatment />
            </div>
          </section>
          <section className={styles['about-cont-2']}>
              <AboutBlank />
              <PlaylistAccordion />
          </section>
        </main>
      </>
    )
  }
};

