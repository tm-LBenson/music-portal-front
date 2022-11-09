import React, { Component } from 'react'

export default class TrackResults extends Component {
  render() {
    console.log(this.props.topTracks);
    let topSongTracks = this.props?.topTracks?.tracks?.items?.map(item => {
      return (
        <>
          <div>{item.name}</div>
          <div>{item?.artists[0]?.name}</div>
          <div>{item?.album?.name}</div>
          
        </>
      )
    });
    return (
      <div> {topSongTracks}</div >
    )
  }
}
