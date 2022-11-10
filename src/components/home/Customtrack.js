import React, { Component } from 'react'
import axios from 'axios';
import styles from '../stylesheets/Customtrack.module.css'
import { Accordion } from 'react-bootstrap';

export default class Customtrack extends Component {
  constructor() {
    super()
    this.state = {}

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
      this.setState({ playlist: data.data })
    } catch (error) {
      console.error(error.message)
    }
  }

  openModal = (e) => {
    console.log(e.target.value)
    this.props.showOrNot(true, e.target.value)

  }

  componentDidMount() {
    setTimeout(this.getPlaylist, 2000)
    this.props.passFunction(this.getPlaylist)
  }

  render() {
    return (

      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Custom Play list</Accordion.Header>
          <Accordion.Body>
            <table className={styles['table-trackdata']}>
              <thead className={styles['thead-trackdata']}>
                <tr className={styles['thead-trackdata__tr']}>
                  <th>Title</th>
                  <th>Artist</th>

                </tr>
              </thead>
              <tbody>
                {this.state?.playlist?.map(song => {
                  return (


                    <tr key={song._id}>
                      <td className={styles['button-parent']}>
                        <button value={song._id} onClick={this.openModal}></button>
                        {song.title}
                      </td>
                      <td className={styles['button-parent']}>
                        <button value={song._id} onClick={this.openModal}></button>
                        {song.artist}
                      </td>
                      <td>




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
