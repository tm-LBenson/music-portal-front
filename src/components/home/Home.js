import React, { Component } from 'react'
import HeroTagLine from './HeroTagLine'
import Customtrack from './Customtrack.js'
import Song from './Song'
import Searchbar from './Searchbar'

export default class Home extends Component {


  render() {
    window.history.pushState({}, null, '/') // clear the browser URL of text 
    return (
      <main className='wrapper'>
        <section className='col-1'>
          <div className='video'></div>
        </section>
        <section className='col-2'>
          <HeroTagLine />
          <div className='hero__trending'>TRENDING</div>
          <section className='cards'>
            <div className='card'>< Song /></div>
            <div className='card'>< Song /></div>
            <div className='card'>< Song /></div>
            <div className='card'>< Song /></div>
            <div className='card'>< Song /></div>
            <div className='card'>< Song /></div>

          </section>
        </section>
        <section className='col-3'>
          <div className='search'> < Searchbar /> </div>
          <div className='play-list'>< Customtrack /></div>
        </section>


      </main>
    )
  }
}
