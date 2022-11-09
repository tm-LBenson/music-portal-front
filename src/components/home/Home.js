import React, { Component } from 'react'
import HeroTagLine from './HeroTagLine'
import Customtrack from './Customtrack.js'
import styles from '../stylesheets/Home.module.css'
import Song from './Song'
import Searchbar from './Searchbar'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }

  retrieveDailySongs = (dailySongs) => {
    this.setState({ dailySongs: dailySongs }, () => console.log(this.state.dailySongs))
  }


  render() {
    console.log(this.state)
    window.history.pushState({}, null, '/') // clear the browser URL of text 
    return (
      <main className={styles['wrapper']}>
        <section className={styles['col-1']}>
          <div className={styles['video']}></div>
        </section>
        <section className={styles['col-2']}>
          <HeroTagLine />
          <div className={styles['hero__trending']}>TRENDING</div>
          <h3>{this.state.dailySongs?.message}</h3>
          <section className={styles['cards']}>



            {/* <div className={styles['card']}>
             
            </div> */}
            <Song passDataUp={this.retrieveDailySongs} token={this.props.token} />
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
