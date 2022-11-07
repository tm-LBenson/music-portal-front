import styles from '../stylesheets/SplashPage.module.css'
import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


const CLIENT_ID = '75b90235ba3f4956834f605c46d9d923'
const REDIRECT_URI = 'http://localhost:3000/'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'code'
const SCOPE = 'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read'


export default class SplashPage extends Component {




  render() {

    return (
<div >
<Card className={styles['login']}>
      <main className={styles.main}>
        <h1><a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Login to Spotify</a></h1>
      </main >
      </Card>
      </div>

    )
  }
}
