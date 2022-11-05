import React, { Component } from 'react'
import '../stylesheets/drawer.css'
export default class NavDrawer extends Component {
  render() {
    return (
      <div className="pure-container" data-effect="pure-effect-slide">
        <input type="checkbox" id="pure-toggle-right" className="pure-toggle" data-toggle="right" />
        <label className="pure-toggle-label" htmlFor="pure-toggle-right" data-toggle-label="right">
          <span className="pure-toggle-icon"></span>
        </label>

        <div className="pure-drawer" data-position="right">
          THIS IS INSIDE THE DRAWER
        </div>
        <div className="pure-pusher-container">
          <div className="pure-pusher">

          </div>
        </div>
        <label className="pure-overlay" htmlFor="pure-toggle-right" data-overlay="right"></label>
      </div>
    )
  }
}
