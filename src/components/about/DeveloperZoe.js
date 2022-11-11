import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from './AboutAssests/Zoe.jpg';
import styles from '../stylesheets/About.module.css';

export default class DeveloperZoe extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" className={styles['img']} src={pic}/>
        <Card.Body>
          <Card.Title>Zoe</Card.Title>
          <Button variant="success">About</Button>
        </Card.Body>
      </Card>
    )
  }
}
