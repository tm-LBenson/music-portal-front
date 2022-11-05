import styles from '../stylesheets/SplashPage.module.css'
import React, { Component } from 'react'



const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

export default class SplashPage extends Component {

  componentDidMount() {

    let _token = hash.access_token;
    if (_token) {

      this.setState({
        token: _token
      });
    }
  }

  CLIENT_ID = '75b90235ba3f4956834f605c46d9d923'
  REDIRECT_URI = "http://localhost:3000/"
  AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  RESPONSE_TYPE = "token"
  render() {
    console.log(this.state)
    return (
      <main>
        <h1><a href={`${this.AUTH_ENDPOINT}?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&response_type=${this.RESPONSE_TYPE}`}>Login to Spotify</a></h1>
      </main >
    )
  }
}
