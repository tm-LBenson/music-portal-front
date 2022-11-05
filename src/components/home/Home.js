import React, { Component } from 'react'
import HeroTagLine from './HeroTagLine'

export default class Home extends Component {


  render() {
    return (
      <main className='wrapper'>
        <section className='col-1'>
          <div className='video'></div>
        </section>
        <section className='col-2'>
          <HeroTagLine />
          <div className='hero__trending'>TRENDING</div>
          <section className='cards'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>

          </section>
        </section>
        <section className='col-3'>
          <div className='search'>Search</div>
          <div className='play-list'>playlist</div>
        </section>


      </main>
    )
  }
}
