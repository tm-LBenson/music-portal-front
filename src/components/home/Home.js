import React, { Component } from 'react'
import HeroTagLine from './HeroTagLine'
import Customtrack from './Customtrack.js'
import Song from '../../Song'
import Searchbar from './Searchbar'
import axios from 'axios'


const artist = 'Grayscale';

const track = 'Over%20Now';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      lyricsData: []

    }
  }

  getlyrics = async () => {
    let result = await axios({
      method: 'get', //you can set what request you want to be
      url: `http://localhost:3001/lyrics?artist=Grayscale&track=Over%20Now`,
      // data: {},
      // headers: {
      //   'Access-Control-Allow-Origin': '*'
      // }
    })
    try {
      this.setState({
        lyricsData: result.data
      }, this.callAPI)
    } catch (error) {
      console.error(error.message);
    
    }
  }
    componentDidMount(){
      this.setState({
        lyricsData: []
      });
    }

    componentDidUpdate(){
      if (!this.state.lyricsData.length) {
        this.getlyrics();
      }

      console.log(this.state);
    }
  



  render() {

    window.history.pushState({}, null, '/') // clear the browser URL of text 
    return (
      <main className='wrapper'>
        <section className='col-1'>
          <div className='video'></div>
          <div className='text-center' style={{ whiteSpace: 'pre' }}>{this.state.lyricsData[0]}</div>
        </section>
        <section className='col-2'>
          <HeroTagLine />
          <div className='hero__trending'>Trending</div>
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
