import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Dropdown } from 'react-bootstrap';

export default class Searchbar extends Component {
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
            </Form.Group>


            <Button variant="primary" type="submit">
              Submit
            </Button>
                 <Form.Group className="mb-3" ></Form.Group>
          </Form>
        );
    }
  };