import React, { Component } from 'react'
import PortalForm from './Portalsearch'
import UserResults from './UserResults'
import Song from '../../Song'
import styles from '../stylesheets/MusicPortal.module.css'
import { Container } from 'react-bootstrap'
import Usertop25 from './Usertop25'

export default class MusicPortal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
      
    }
  }

  handleData = (data) => 
  {
    let topResults = data.items.map(item => item)
    this.setState({data: topResults})
  }

  componentDidUpdate(prevProps) {

    if (!prevProps.data[0]?.name) {

    this.props.pushData(this.state.data)
  }
}

  render() {
    console.log(this.state.data)
    return (
      <main className={styles['wrapper']}>
        <section className={styles['col-1']}>
      <div>Column1</div>
      
      <div>

<div className={styles['play-list']}> <Usertop25 handleData={this.handleData} token={this.props.token}/></div>
  
    </div>
    <UserResults topUserData={this.state.data} />
      </section>
      <section className={styles['col-2']}>
      <div>Column2</div>
      <div className={styles['col-2-1']}>
      < PortalForm />
      

      <section className={styles['cards']}>
            <div className={styles['card']}>< Song /></div>
            <div className={styles['card']}>< Song /></div>
            <div className={styles['card']}>< Song /></div>
            <div className={styles['card']}>< Song /></div>
            <div className={styles['card']}>< Song /></div>
            <div className={styles['card']}>< Song /></div>
          </section>
      </div>
      </section>
      <section className={styles['col-3']}>
      <Container className={styles['placeholder']}>Place Holder</Container>
      <Container className={styles['placeholder']}>Place Holder</Container>
      <Container className={styles['placeholder']}>Place Holder</Container>
      </section>
      
      
</main>
    )
  }
}
