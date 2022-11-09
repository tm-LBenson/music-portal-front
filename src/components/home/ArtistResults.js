import React, { Component } from 'react'

export default class ArtistResults extends Component {
  render() {
    console.log(this.props.artistTopTracks);
    let topTracks = this.props?.artistTopTracks?.tracks?.map(item => {
      return (
        <div>{item.name}</div> 
      )
  });
  return(
      <div>{topTracks}</div >
    )
  }
}
