import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import styles from '../stylesheets/About.module.css';


export default class MissionStatment extends Component {
  render() {
    return (
      <Alert variant='success' className={styles['mission-alert']}>
        What does it solve?
        Music streaming platforms provide limited filters and personalized choices at will. We’re here to solve that problem.
        Why did we pick it?
        We are all music enthusiasts so we spared no time in thinking of a project, I mean… who doesn’t enjoy music?
      </Alert>
    )
  }
};

