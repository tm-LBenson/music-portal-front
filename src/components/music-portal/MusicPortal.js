import React, { Component } from 'react'
import PortalForm from './Portalsearch'
import Customtrack from '../home/Customtrack.js'
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
    console.log(this.props.user_id)
    return (
      <section className={styles['wrapper']}>
        <section className={styles['col-1']}>

  <Usertop25 handleData={this.handleData} token={this.props.token} />


          <UserResults topUserData={this.state.data} user_id={this.props.user_id}/>
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
        <div className={styles['play-list']}>{this.props.user_id ? < Customtrack showOrNot={this.getShowStatus} passFunction={this.passFunction} user_id={this.props.user_id} /> : null}</div>
        </section>


      </section>

    )
  }
}
