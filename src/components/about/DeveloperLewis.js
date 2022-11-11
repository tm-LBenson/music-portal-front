import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from './AboutAssests/Lewis.jpg';
import styles from '../stylesheets/About.module.css';

export default class DeveloperLewis extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" className={styles['img']} src={pic}/>
        <Card.Body>
          <Card.Title>Lewis</Card.Title>
          <Button variant="success">About</Button>
        </Card.Body>
      </Card>
    )
  }
}

