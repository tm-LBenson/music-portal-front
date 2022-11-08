import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class DeveloperSteven extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Steven</Card.Title>
          <Button variant="primary">About</Button>
        </Card.Body>
      </Card>
    )
  }
}
