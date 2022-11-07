import React, { Component } from 'react'

import './components/stylesheets/reset.css'
import './components/stylesheets/App.css'
import './components/stylesheets/home.css'
import NavDrawer from './components/nav/NavDrawer';
import NavArea from './components/nav/NavArea'
import Home from './components/home/Home'
import About from './components/about/Home'
import SplashPage from './components/splashPage/SplashPage'
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
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

  // let Page
  // switch (window.location.pathname) {
  //   case "/":
  //     Page = App
  //     break;
  //   case "/about":
  //     Page = Pricing
  //     break;
  // 
  render() {

    return (
      <React.Fragment>
        {!code ? <SplashPage checkLogin={this.checkLogin} /> :

          <React.Fragment >
            {!this.state.token ? <Auth onGetToken={this.getToken} code={code} /> : null}
            {this.state.token ? <NavArea token={this.state.token} /> : null}
          </React.Fragment>
        }
        <Routes>
          <NavDrawer>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </NavDrawer>
        </Routes>

      </React.Fragment>
    )
  }

