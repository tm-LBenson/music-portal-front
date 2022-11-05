import React, { Component } from 'react'
import styles from '../stylesheets/NavArea.module.css'
import '../stylesheets/drawer.css'

import axios from 'axios'
export default class NavArea extends Component {

  constructor() {
    super()
    this.state = {
      profileName: '',
      profilePic: '',

    }
  }
  getData = async () => {
    await axios({
      method: 'get', //you can set what request you want to be
      url: 'https://api.spotify.com/v1/me',
      data: {},
      headers: {
        'Authorization': 'Bearer ' + this.props.token,
        'accept': 'application/json',
        'Content-type': 'application/json',
      }
    })
      .then(data => this.setState({
        profileName: data.data.display_name,
        profilePic: data.data.images[0].url
      }))
      .catch(error => console.log(error))

  }
  componentDidMount() {
    // this.getData()

  }

  render() {

    return (
      <section className={styles.nav}>
        <figure className={styles.nav__logo}>
          LOGO
        </figure>
        <figure className={styles['nav__profile-pic']}>
          <img className={styles['nav__profile-pic--img']} src={this.state.profilePic} alt='' />
        </figure>
      </section>
    )
  }
}
