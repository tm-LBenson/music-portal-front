import React, { Component } from 'react'
import './components/stylesheets/reset.css'
import './components/stylesheets/App.css'
import NavDrawer from './components/nav/NavDrawer';
import NavArea from './components/nav/NavArea'
import Home from './components/home/Home'
import About from './components/about/About'
import MusicPortal from './components/music-portal/MusicPortal'
import SplashPage from './components/splashPage/SplashPage'
import Footer from './components/nav/Footer'
import Auth from './Auth';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './components/stylesheets/music-player.css'
const code = new URLSearchParams(window.location.search).get("code")

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      token: '',
      data: {},
      topData: []
    }
  }

  checkLogin = (token) => {
    this.setState({ token: token })
  }

  getToken = (token) => {
    this.setState({ token: token })
  }

  handleData = (topData) => {
    this.setState({ topData: topData })
  }



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

  render() {

    return (
      <React.Fragment>
        <Routes>
          <Route path='/' element={
            !code ? <SplashPage checkLogin={this.checkLogin} /> :
              <React.Fragment >
                {!this.state.token ? <Auth onGetToken={this.getToken} code={code} /> : null}
                <NavArea />
                {this.state.token ? <NavDrawer token={this.state.token} /> : null}
                {this.state.token ? <Home token={this.state.token} /> : null}
              </React.Fragment>
          } />

          <Route path='/about' element={
            <React.Fragment>
              {this.state.token ? <NavDrawer token={this.state.token} /> : null}
              {this.state.token ? < About /> : null}
            </React.Fragment>
          } />
          <Route path='/music-portal' element={
            <React.Fragment >
              <NavArea />
              {this.state.token ? <NavDrawer token={this.state.token} /> : null}
              {this.state.token ? <MusicPortal data={this.state.topData} pushData={this.handleData} token={this.state.token} /> : null}

            </React.Fragment>
          } />

          <Route path='/logout' element={
            < SplashPage />
          } />
        </Routes>
        {this.state.token ? <Footer trackUri={this.trackUri} token={this.state.token} /> : null}
      </React.Fragment>
    )
  }
}
