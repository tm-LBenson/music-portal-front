import React, { Component } from 'react'
import '../stylesheets/drawer.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
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
          <nav className='nav'>
            <Link to="/" className="Site-Title">Portal Inc.</Link>
            <ul>
              <li>
                <CustomLink to="/about">About</CustomLink>
              </li>
            </ul>
          </nav>
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

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
    </Link>
    </li>
  )
}
