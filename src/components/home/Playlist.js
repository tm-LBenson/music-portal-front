import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import styles from '../stylesheets/Song.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


export default class Song extends Component {
  constructor() {
    super()
    this.state = {}
  }




  render() {

    return (
      <React.Fragment>

        <Card className={styles.card} >
          <Card.Img className={styles['card-img']} src={this.props.songData.images[0].url} />
          <Card.Body>
            <Card.Title>
              {this.props.songData.name}
            </Card.Title>
            <Card.Text className={styles['card-text']}>
              <FontAwesomeIcon icon={faPlay} />
            </Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    )
  }
}
