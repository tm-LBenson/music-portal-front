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
      }, () => {
        this.props.checkLogin(this.state.token)
      });
    }
  }


  render() {

    return (
      <main className={styles.main}>

        {!this.state?.token ? <h1><a href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`}>Login to Spotify</a></h1> : <h1>logged in</h1>}
      </main >
    )
  }
}
