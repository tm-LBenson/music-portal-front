import React, { Component } from 'react'
import styles from '../stylesheets/TrackResults.module.css';

export default class ArtistResults extends Component {
  render() {

    let topTracks = this.props?.artistTopTracks?.tracks?.map((item,index) => {
      return (
        /* The styling for this lives within 
        src > components > stylesheets > TrackResults.module.css */
        <>
        <div className={styles['text']}>{index+1}. {item.name}</div> 
        </>
      )
  });
  return(
      <div >{topTracks}</div>
    )
  }
}
