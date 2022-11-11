import React, { Component } from 'react'
import axios from 'axios';
import styles from '../stylesheets/Customtrack.module.css'
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
export default class Customtrack extends Component {
  constructor() {
    super()
    this.state = {}

  }


  getCurrentDevice = async () => {
    try {
      const data = await axios({
        method: 'get', //you can set what request you want to be
        url: 'https://api.spotify.com/v1/me/player/devices',
        data: {},
        headers: {
          'Authorization': 'Bearer ' + this.props.token,
          'accept': 'application/json',
          'Content-type': 'application/json',
        }
      })
      const current = data.data.devices.find(device => device.name === 'Spotify Web Player')
      this.setState({ deviceData: current.id })
    } catch (error) {
      console.error(error.message)
      this.setState({ deviceData: 'error' })
    }
  }

  getSongArtist = async (uri) => {
    const id = uri.split(':')[2]
    try {
      const data = await axios({
        method: 'get', //you can set what request you want to be
        url: `https://api.spotify.com/v1/tracks/${id}`,
        data: {
          "context_uri": uri,

          "position_ms": 0
        },
        headers: {
          'Authorization': 'Bearer ' + this.props.token,
          'accept': 'application/json',
          'Content-type': 'application/json',
        }
      })
      this.playFromPlaylist(data.data.album.uri)
    } catch (error) {
      console.error(error.message)
    }
  }


  playFromPlaylist = async (uri) => {
    try {
      await axios({
        method: 'put', //you can set what request you want to be
        url: `https://api.spotify.com/v1/me/player/play`,
        data: {
          "context_uri": uri,

          "position_ms": 0
        },
        headers: {
          'Authorization': 'Bearer ' + this.props.token,
          'accept': 'application/json',
          'Content-type': 'application/json',
        }
      })
      setTimeout(this.props.currentlyPlaying, 1500)
    } catch (error) {
      console.error(error.message)
    }
  }


  getPlaylist = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKEND}/play-list/${this.props.user_id}`
      const data = await axios({
        method: 'get', //you can set what request you want to be
        url: url,
        data: {},
        headers: {}
      })
      this.setState({ playlist: data.data })
    } catch (error) {
      console.error(error.message)
    }
  }

  openModal = (e) => {

    this.props.showOrNot(true, e.target.value)

  }
  handleClick = (e) => {
    console.log(e.target.value)
    this.getCurrentDevice()
    const waitBeforePlaying = () => {
      console.log('waiting')
      this.getSongArtist(e.target.value)
    }
    setTimeout(waitBeforePlaying, 1500)

  }
  componentDidMount() {
    setTimeout(this.getPlaylist, 2000)
    if (this.props.passFunction) this.props?.passFunction(this?.getPlaylist)

  }

  render() {
    return (

      <Accordion defaultActiveKey={['0']} alwaysOpen className={styles['playlist-comp']}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Custom Play list</Accordion.Header>
          <Accordion.Body>
            <table className={styles['table-trackdata']}>
              <thead className={styles['thead-trackdata']}>
                <tr className={styles['thead-trackdata__tr']}>
                  <th>Title</th>
                  <th>Artist</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {this.state?.playlist?.map(song => {
                  return (


                    <tr className={styles.row} key={song._id}>
                      <td className={styles['button-parent']}>
                        <button value={song._id} onClick={this.openModal}></button>
                        {song.title}
                      </td>
                      <td className={styles['button-parent']}>
                        <button value={song._id} onClick={this.openModal}></button>
                        {song.artist}
                      </td>
                      <td className={styles.button__parent}>
                        <button className={styles['card__text-content--button']} onClick={this.handleClick} value={song.uri}></button>
                        <FontAwesomeIcon icon={faPlay} />
                      </td>
                    </tr>

                  )
                })}
              </tbody>
            </table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  }
}
