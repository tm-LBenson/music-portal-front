import React, { Component } from 'react'

export default class UserOutput extends Component {
  render() {
    return (
      <>
      <div>{this.props.ArtistName}</div>
      <div>{this.props.TrackArtist}</div>
      </>
    )
  }
}
