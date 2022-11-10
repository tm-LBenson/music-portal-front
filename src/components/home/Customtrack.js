import React, { Component } from 'react'
import axios from 'axios';
import styles from '../stylesheets/Customtrack.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


export default class Customtrack extends Component {
  constructor() {
    super()
    this.state = {}

  }

  removeFromPlaylist = (e) => {
    console.log(e.target.value)
  }

  getPlaylist = async () => {
    try {
      const url = `http://localhost:3001/play-list/${this.props.user_id}`
      const data = await axios({
        method: 'get', //you can set what request you want to be
        url: url,
        data: {},
        headers: {}
      })
      this.setState({ playlist: data.data }, () => console.log(this.state.playlist))
    } catch (error) {
      console.error(error.message)
    }
  }

  componentDidMount() {
    setTimeout(this.getPlaylist, 2000)
  }

  render() {
    console.log(this.props)
    return (
      <table className={styles['table-trackdata']}>
        <thead className={styles['thead-trackdata']}>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Play</th>
            <th>Remove from Playlist</th>
          </tr>
        </thead>
        {this.state?.playlist?.map(song => {
          return (
            <>
              <tr>
                <td>
                  {song.title}
                </td>
                <td>
                  {song.artist}
                </td>
                <td>
                  <div className={styles['button-wrapper']}>
                    <div className={styles['button-parent']}>
                      <button value={song._id} onClick={this.removeFromPlaylist}></button>
                      <FontAwesomeIcon icon={faMinus} />
                    </div>
                  </div>
                </td>
              </tr>
            </>
          )
        })}
      </table>
    )
  }
}
