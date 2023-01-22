import React, { Component } from 'react'

// Import stylesheets
import './components/stylesheets/reset.css'
import './components/stylesheets/App.css'

// Import other components
import NavDrawer from './components/nav/NavDrawer';
import NavArea from './components/nav/NavArea'
import Home from './components/home/Home'
import About from './components/about/About'
import MusicPortal from './components/music-portal/MusicPortal'
import SplashPage from './components/splashPage/SplashPage'
import Footer from './components/nav/Footer'
import Auth from './Auth';

// Import react-router-dom library for handling routes
import { Route, Routes } from 'react-router-dom';

// Import axios library for making HTTP requests
import axios from 'axios';

import './components/stylesheets/music-player.css'

const code = new URLSearchParams(window.location.search).get("code")

// Define App component
export default class App extends Component {
  constructor() {
    super()
    // Initialize component's state
    this.state = {
      token: '', // token used for authentication
      data: {}, // data to be passed between components
      topData: [] // data related to top tracks/artists
    }
  }

  // Method to update token state
  checkLogin = (token) => {
    this.setState({ token: token })
  }

  // Method to update token state
  getToken = (token) => {
    this.setState({ token: token })
  }

  // Method to update topData state
  handleData = (topData) => {
    this.setState({ topData: topData })
  }

  // Method to update user_id state
  getUserID = (userid) => {
    this.setState({ user_id: userid })
  }

  // Method to update currentlyPlaying state
  grabPlayingStatus = (isItPlaying) => {
    this.setState({ currentlyPlaying: isItPlaying })
  }

  // Method to update getSong state
  passFunction = (func) => this.setState({ getSong: func })

  // Method to post user data to the server
  postUserData = async (obj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/user-results`;

      let dataPost = await axios.post(url, obj);

      this.setState({
        topData: [...this.state.topData, dataPost.data]
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  trackUri = 'spotify:artist:3HkwxR8PuBf5hvumgsfByJ'

  // Render method to render components based on URL route

  render() {
    console.log(this.state.user_id)
    return (
      <React.Fragment>
        <NavArea />

        {this.state.token ? <NavDrawer token={this.state.token} getUserId={this.getUserID} /> : null}

        <Routes>
          <Route path='/' element={
            !code ? <SplashPage checkLogin={this.checkLogin} /> :
              <React.Fragment >

                {!this.state.token ? <Auth onGetToken={this.getToken} code={code} /> : null}
                {this.state.token ? <Home passFunction={this.passFunction} getSong={this.state.getSong} playingStatus={this.state.currentlyPlaying} token={this.state.token} user_id={this.state.user_id} /> : null}
              </React.Fragment>
          } />

          <Route path='/about' element={
            <React.Fragment>
              {this.state.token ? < About /> : null}
            </React.Fragment>
          } />
          <Route path='/music-portal' element={
            <React.Fragment >
              {this.state.token ? <MusicPortal user_id={this.state.user_id} data={this.state.topData} pushData={this.handleData} token={this.state.token} /> : null}

            </React.Fragment>
          } />

          <Route path='/logout' element={
            <React.Fragment>

              < SplashPage />
            </React.Fragment>
          } />
        </Routes>
        {this.state.token ? <Footer playingStatus={this.grabPlayingStatus} trackUri={this.trackUri} token={this.state.token} /> : null}
      </React.Fragment>
    )
  }
}
