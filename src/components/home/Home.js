import React, { Component } from 'react'
import HeroTagLine from './HeroTagLine'
import Customtrack from './Customtrack.js'
import styles from '../stylesheets/Home.module.css'
import Song from '../../Song'
import Searchbar from './Searchbar'

export default class Home extends Component {


  render() {
    window.history.pushState({}, null, '/') // clear the browser URL of text 
    return (
      <main className={styles['wrapper']}>
        <section className={styles['col-1']}>
          <div className={styles['video']}></div>
        </section>
        <section className={styles['col-2']}>
          <HeroTagLine />
          <div className={styles['hero__trending']}>TRENDING</div>
          <section className={styles['cards']}>
            <div className={styles['card']}>< Song /></div>
            <div className={styles['card']}>< Song /></div>
            <div className={styles['card']}>< Song /></div>
            <div className={styles['card']}>< Song /></div>
            <div className={styles['card']}>< Song /></div>
            <div className={styles['card']}>< Song /></div>

          </section>
        </section>
        <section className={styles['col-3']}>
          <div className={styles['search']}> < Searchbar /> </div>
          <div className={styles['play-list']}>< Customtrack /></div>
        </section>


      </main>
    )
  }
}
