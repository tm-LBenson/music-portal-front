import styles from '../stylesheets/SplashPage.module.css'
import React, { Component } from 'react'

export default class SplashPage extends Component {

  CLIENT_ID = '75b90235ba3f4956834f605c46d9d923'
  REDIRECT_URI = "http://localhost:3000/"
  AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  RESPONSE_TYPE = "token"
  render() {
    return (
      <main>
        <h1><a href={`${this.AUTH_ENDPOINT}?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&response_type=${this.RESPONSE_TYPE}`}>Login to Spotify</a></h1>
      </main >
    )
  }
}
