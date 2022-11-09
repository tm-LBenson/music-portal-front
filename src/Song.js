import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export default class Song extends Component {
  render() {
    return (
      <Card >
        <Card.Img src="https://via.placeholder.com/140x100" />
        <Card.Body>
          <Card.Title>'Song Title'
          </Card.Title>
          <Card.Text>
            Test Test Test Test Test
            Test Test Test Test Test
            Test Test Test Test Test
          </Card.Text>
        </Card.Body>
      </Card>

    )
  }
}
