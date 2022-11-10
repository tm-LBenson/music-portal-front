import React, { Component } from 'react'
import styles from '../stylesheets/NavArea.module.css'
import '../stylesheets/drawer.css'
import logo from './logo/Logo.png'

export default class NavArea extends Component {

 
  render() {

    return (
      <section className={styles.nav}>

        <figure className={styles.nav__logo}>
        <img className={styles['logo']} src={logo} alt="logo" />
        </figure>
      

      </section>
    )
  }
}
 