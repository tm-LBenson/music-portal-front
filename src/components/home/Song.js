import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import DailyHomeCard from './DailyHomeCard';
export default class Song extends Component {
  constructor() {
    super()
    this.state = {}
  }




  render() {
  
    return (
      <React.Fragment>
        <DailyHomeCard passDataUp={this.props.passDataUp} token={this.props.token} />
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
      </React.Fragment>
    )
  }
}
