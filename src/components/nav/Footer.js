import React, { Component } from 'react'
import styles from '../stylesheets/Footer.module.css'
import SpotifyWebPlayer from 'react-spotify-web-playback/lib'

export default class Footer extends Component {

  constructor() {
    super()
    this.state = {
      play: false

    }
  }

  componentDidMount() {
    this.setState({ play: false, token: this.props.token })

  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.token !== prevState.token) {
      if (this.state.token) {
        console.log('placeholder')
      }


    }
  }



  render() {
    return (
      <footer className={styles.footer}>
        <SpotifyWebPlayer

          token={this.state.token}
          showSaveIcon
          callback={state => {
            if (!state.isPlaying) this.setState({ playing: false });
          }}
          play={this.state.play}
          uris={this.props.trackUri ? this.props.trackUri : []}
        />

      </footer>
    )
  }
}

