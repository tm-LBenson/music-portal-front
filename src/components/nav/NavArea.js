import React, { Component } from 'react'
import styles from '../stylesheets/NavArea.module.css'
import '../stylesheets/drawer.css'

import axios from 'axios'
export default class NavArea extends Component {

 
  render() {

    return (
      <section className={styles.nav}>
        <figure className={styles.nav__logo}>
          LOGO
        </figure>
      
      </section>
    )
  }
}
