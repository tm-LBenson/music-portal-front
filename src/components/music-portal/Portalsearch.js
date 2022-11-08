import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Dropdown } from 'react-bootstrap';

export default class Portalsearch extends Component {
  render() {
    return (
   <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search for a song. </Form.Label>
              <Form.Control type="input" placeholder="Enter Song Name" />
              <Form.Text className="text-muted">
                Powered by Spotify ©
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Artist / Band Name</Form.Label>
              <Form.Control type="input" placeholder="Enter Artist / Band Name" />
              <Form.Text className="text-muted">
                Powered by Spotify ©
              </Form.Text>
              <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
     Filter by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#sel-1">Acousticness</Dropdown.Item>
        <Dropdown.Item href="#sel-2">Danceability</Dropdown.Item>
        <Dropdown.Item href="#sel-3">Energy</Dropdown.Item>
        <Dropdown.Item href="#sel-4">Loudness</Dropdown.Item>
        <Dropdown.Item href="#sel-5">Tempo</Dropdown.Item>
        <Dropdown.Item href="#sel-6">Positive</Dropdown.Item>
        <Dropdown.Item href="#sel-7">Negative</Dropdown.Item>
        <Dropdown.Item href="#sel-8">Duration</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Form.Group>


            <Button variant="primary" type="submit">
              Submit
            </Button>
                 <Form.Group className="mb-3" ></Form.Group>
          </Form>
    )
  }
}
