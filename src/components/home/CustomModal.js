import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'
import styles from '../stylesheets/Home.module.css'
export default class CustomModal extends Component {
  constructor() {
    super()
    this.state = { show: false }
  }

  removeSongHander = (e) => {
    const deleteSong = async () => {

      try {
        const url = `http://localhost:3001/delete/${this.props._id}`
        await axios({
          method: 'delete', //you can set what request you want to be
          url: url,
          data: {},
          headers: {}
        })

      } catch (error) {
        console.error(error.message)
      }
    }
    deleteSong()
  }
  getSong = async () => {

    try {
      const url = `http://localhost:3001/get-song/${this.props._id}`
      const data = await axios({
        method: 'get', //you can set what request you want to be
        url: url,
        data: {},
        headers: {}
      })
      this.setState({ song: data.data })
    } catch (error) {
      console.error(error.message)
    }
  }

  addNote = async (data) => {

    try {
      const url = `http://localhost:3001/add-comment/${this.props._id}`
      await axios({
        method: 'patch', //you can set what request you want to be
        url: url,
        data: {
          title: this.state.song.title,
          artist: this.state.song.artist,
          user_id: this.state.song.user_id,
          img_url: this.state?.song?.img_url || null,
          user_notes: data
        },
        headers: {}
      })
      this.getSong()
    } catch (error) {
      console.error(error.message)
    }
  }

  componentDidMount() {

    this.getSong()
  }

  handleNotes = () => {
    this.setState({ addNote: true })
  }

  submitNotes = (e) => {
    e.preventDefault()
    this.addNote(e.target[0].value)

    this.setState({ addNote: false })



  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.show !== this.state.show) {
      this.setState({ show: this.props.show })
    }
    if (this.state._id !== prevState._id) {
      this.getSong()
    }
  }

  render() {
    return (
      <>
        <Modal
          show={this.state.show}
          onHide={() => {
            this.props.closeModal(false)
            this.setState({ show: false })
          }}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {`${this.state?.song?.title}`} - {`${this.state?.song?.artist}`}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state?.song?.user_notes}</p>
            {this.state.addNote ? <div className={styles['form-group']}> <form onSubmit={this.submitNotes} className={styles['form']}>
              <label>
                Add a note
                <textarea></textarea>
              </label>
              <button type='submit'>Submit</button>
            </form><button onClick={() => {
              this.setState({ addNote: false })
            }}>Cancel</button></div> : null}
            <button onClick={this.handleNotes}>Edit Note</button>
            <button onClick={() => {
              this.removeSongHander()
              this.props.getPlaylist()
              this.props.closeModal(false)
              this.setState({ show: false })

            }
            }>Delete</button>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}
