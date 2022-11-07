import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Dropdown } from 'react-bootstrap';

export default class Usertop25 extends Component {
  render() {
    return (
      <React.Fragment>
      <p>User's Top 25</p>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
  
      <Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
Filter by
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item href="#sel-1">Placeholder</Dropdown.Item>
  <Dropdown.Item href="#sel-2">Placeholder</Dropdown.Item>
  <Dropdown.Item href="#sel-3">Placeholder</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
Filter by
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item href="#sel-1">Past Month</Dropdown.Item>
  <Dropdown.Item href="#sel-2">Past 6 Months</Dropdown.Item>
  <Dropdown.Item href="#sel-3">Past 3 Years</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
           <Form.Group className="mb-3" ></Form.Group>
    </Form>
    </React.Fragment>
    )
  }
}
