import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import UserOutput from './UserOutput'
import styles from '../stylesheets/MusicPortal.module.css'

export default class Results extends Component {

  render() {
console.log(this.props.topUserData)
    let topResults = this.props.topUserData.map((item,index) => {
      return ( 

        item.duration_ms ? <UserOutput user_id={this.props.user_id}ArtistName={item.name} counter={index+1} TrackArtist={item.artists[0].name} id={item.id} value={[item.name, item?.artists[0]?.name, item.uri]}/> : <UserOutput ArtistName={item.name} counter={index+1} id={item.id}TrackArtist='' value=''user_id={this.props.user_id}/>)
     
      
    })
    

    return (
      <>
      <Accordion className={styles['cord']}>
        <Accordion.Item >
          <Accordion.Header className={styles['text-head']}>
            Your Top Results
          </Accordion.Header>
          <Accordion.Body className={styles['text']}>
          <table>
                <thead className={styles['textSmall']}>
                  <tr>
                    <th>Results</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

            {topResults}
                          </table>


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
