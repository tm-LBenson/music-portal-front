import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'

export default class Results extends Component {
  render() {
    return (

      <Accordion>
      <Accordion.Item>
      <Accordion.Header>
        Test Item
    </Accordion.Header>
    <Accordion.Body>Body Test </Accordion.Body>
    </Accordion.Item>
    </Accordion>
      
    )
  }
}
