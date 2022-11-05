import React, { Component } from 'react'

import './components/stylesheets/reset.css'
import './components/stylesheets/App.css'
import './components/stylesheets/home.css'
import NavDrawer from './components/nav/NavDrawer';
import NavArea from './components/nav/NavArea'
import Home from './components/home/Home'
import SplashPage from './components/splashPage/SplashPage'
import Auth from './Auth';


const code = new URLSearchParams(window.location.search).get("code")

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      token: ''
    }
  }

  checkLogin = (token) => {
    this.setState({ token: token })
  }

  getToken = (token) => {
    this.setState({ token: token })
  }

  render() {

    return (
      <React.Fragment>

        {!code ? <SplashPage checkLogin={this.checkLogin} /> :

          <React.Fragment >
            {!this.state.token ? <Auth onGetToken={this.getToken} code={code} /> : null}
            <NavDrawer />
            {this.state.token ? <NavArea token={this.state.token} /> : null}
            <Home />
          </React.Fragment>
        }


      </React.Fragment>
    )
  }
}

