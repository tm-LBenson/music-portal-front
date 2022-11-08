import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import UserOutput from './UserOutput'

export default class Results extends Component {

  render() {

    let topResults = this.props.topUserData.map(item => {

      return  item.duration_ms ? <UserOutput ArtistName={item.name} TrackArtist={item.artists[0].name}/> : <UserOutput ArtistName={item.name} TrackArtist=''/>
     
      
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
