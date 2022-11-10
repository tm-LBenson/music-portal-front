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
          <Card.Title>
            {this.props.SongName}
          </Card.Title>
          <Card.Text> 
            {this.props.ArtistName}
            <div></div>
            {this.props.AlbumName}
          </Card.Text>
        </Card.Body>
      </Card>

      </>
    )
  }
}
