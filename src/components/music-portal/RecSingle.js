import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import styles from '../stylesheets/MusicPortal.module.css'
import '../stylesheets/card.css'

export default class RecSingle extends Component {
  render() {
    return (
      <>
      <Card className={styles['card']}>
        <Card.Img className={styles['cardimg']} src={this.props.img} />
        <Card.Body>
          <Card.Title className={styles['text']}>
            {this.props.SongName}
          </Card.Title>
          <Card.Text > 
          <div className={styles['textSmall']}>
            Artist: {this.props.ArtistName}
            </div>
            <div className={styles['textSmall']}>
            Album: {this.props.AlbumName}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      </>
    )
  }
}
