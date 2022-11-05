import React, { Component } from 'react'
import styles from '../stylesheets/NavArea.module.css'
import '../stylesheets/drawer.css'
import selfie from '../../assets/selfie100px.png'
export default class NavArea extends Component {
  render() {
    return (
      <section className={styles.nav}>
        <figure className={styles.nav__logo}>
          LOGO
        </figure>
        <figure className={styles['nav__profile-pic']}>
          <img className={styles['nav__profile-pic--img']} src={selfie} alt='' />
        </figure>
      </section>
    )
  }
}
