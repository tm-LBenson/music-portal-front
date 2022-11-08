import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import UserOutput from './UserOutput'

export default class Results extends Component {

  render() {

    let topResults = this.props.topUserData.map(item => {
      console.log(item.artists)
      return <UserOutput ArtistName={item.name}TrackArtist={item.artists[0].name}/>
    })
    

    return (
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>
            Top Results
          </Accordion.Header>
          <Accordion.Body>


            {topResults}

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  }
}
