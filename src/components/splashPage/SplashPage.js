import styles from '../stylesheets/SplashPage.module.css'
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import videoBg from './assets/Vinyl.mp4'
import logo from './assets/Logo.png'

const CLIENT_ID = '75b90235ba3f4956834f605c46d9d923'
const REDIRECT_URI = 'http://localhost:3000/'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'code'
const SCOPE = 'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read'

export default class SplashPage extends Component {




  render() {

    return (
      <>


        <div className={styles['login']}>
          <img className={styles['logo']} src={logo} alt="logo" />
          <div className={styles['overlay']}></div>
          <video className={styles['video']} src={videoBg} autoPlay loop muted />
          <div className={styles['content']}>
            <p>Portal Inc ©</p>
            <p>Welcomes you!</p>
            <p>Powered with Spotify ©</p>
          </div>
          <Button variant="primary" className={styles['button']} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Link your Spotify</Button>
        </div>
      </>

    )
  }
}
