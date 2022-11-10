import React, { Component } from 'react'
import styles from '../stylesheets/MusicPortal.module.css'

export default class UserOutput extends Component {
  render() {



    return (
      <>
      <div> {this.props.counter}. {this.props.ArtistName}</div>


      <div className={styles['textSmall']}> {this.props.TrackArtist}</div>
      </>
    )
  }
}
