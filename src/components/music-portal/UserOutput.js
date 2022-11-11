import React, { Component } from 'react'

import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from '../stylesheets/TrackResults.module.css';

export default class UserOutput extends Component {
  constructor() {
    super()
    this.state = {}
  }
  addToPlaylist = (e) => {
    const addToPlaylist = async () => {
      const [title, artist, uri] = e.target.value.split(',')
      try {

        const data = await axios({
          method: 'post', //you can set what request you want to be
          url: `${process.env.REACT_APP_BACKEND}/add-song`,
          data: {
            user_id: this.props.user_id,
            title: title,
            uri: uri,
            artist: artist,
            user_notes: 'No notes added'
          },
          headers: {}
        })
        this.setState({ trackResults: data.data })
      } catch (error) {
        console.error(error.message)
      }
    }
    addToPlaylist();
  }
  render() {



    return (
      <>

        <tr key={this.props.id}>
          <td>
            <div className={styles['name']}> {this.props.counter}. {this.props.ArtistName}</div>
          </td>
          <td>
            <div className={styles['name']}> {this.props.TrackArtist}</div>
          </td>
          <td>

            <div className={styles['button-wrapper']}>
              <div className={styles['button-parent']}>
                <button value={this.props.value} onClick={this.addToPlaylist}></button>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </td>
        </tr>
      </>
    )
  }
}
