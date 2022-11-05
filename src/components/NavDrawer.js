import React, { Component } from 'react'
import './stylesheets/drawer.css'
export default class NavDrawer extends Component {
  render() {
    return (
      <div class="pure-container" data-effect="pure-effect-slide">
        <input type="checkbox" id="pure-toggle-right" class="pure-toggle" data-toggle="right" />
        <label class="pure-toggle-label" for="pure-toggle-right" data-toggle-label="right">
          <span class="pure-toggle-icon"></span>
        </label>

        <div class="pure-drawer" data-position="right">
          THIS IS INSIDE THE DRAWER
        </div>
        <div class="pure-pusher-container">
          <div class="pure-pusher">

          </div>
        </div>
        <label class="pure-overlay" for="pure-toggle-right" data-overlay="right"></label>
      </div>
    )
  }
}
