import React, { Component } from 'react'
import PortalForm from './Portalsearch'
import UserResults from './UserResults'

import Recs from './Recs'

import styles from '../stylesheets/MusicPortal.module.css'
import Usertop25 from './Usertop25'

export default class MusicPortal extends Component {
  constructor(props) {
    super(props)
    this.state = {

      data: [],
      songRec: []

    }
  }

  handleData = (data) => {
    let topResults = data.items.map(item => item)
    this.setState({ data: topResults })
  }

  handleRec = (data) => {



    let name = data.tracks.map(item => item)
    this.setState({ songRec: name })
  }



  render() {
    // console.log(this.state.data)
    return (
      <section className={styles['wrapper']}>
        <section className={styles['col-1']}>


  <Usertop25 handleData={this.handleData} token={this.props.token} />


          <UserResults topUserData={this.state.data} />
        </section>
        <section className={styles['col-2']}>

          <div>
            < PortalForm token={this.props.token}
              handleRec={this.handleRec} pushData={this.props.pushData} />
          </div>
          <section className={styles['cards']}>
   
              < Recs songData={this.state.songRec} />
       

          </section>
        </section>
        <section className={styles['col-3']}>
        </section>


      </section>

    )
  }
}
