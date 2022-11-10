import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import UserOutput from './UserOutput'
import styles from '../stylesheets/MusicPortal.module.css'

export default class Results extends Component {

  render() {
console.log(this.props.topUserData)
    let topResults = this.props.topUserData.map((item,index) => {
      return ( 

        item.duration_ms ? <UserOutput ArtistName={item.name} counter={index+1} TrackArtist={item.artists[0].name}/> : <UserOutput ArtistName={item.name} counter={index+1} TrackArtist=''/>)
     
      
    })
    

    return (
      <>
      <Accordion className={styles['cord']}>
        <Accordion.Item >
          <Accordion.Header className={styles['text-head']}>
            Your Top Results
          </Accordion.Header>
          <Accordion.Body className={styles['text']}>


            {topResults}


          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className={styles['div']}>
        <p>YO</p>
      </div>
      </>
    )
  }
}
