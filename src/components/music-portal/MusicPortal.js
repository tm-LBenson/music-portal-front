import React, { Component } from 'react'
import PortalForm from './Portalsearch'
import UserResults from './UserResults'
import Song from '../../Song'
import styles from '../stylesheets/MusicPortal.module.css'
import { Container } from 'react-bootstrap'
import Usertop25 from './Usertop25'

export default class MusicPortal extends Component {
  render() {
    return (
      <main className={styles['wrapper']}>
        <section className={styles['col-1']}>
      <div>Column1</div>
      <div>

<div className={styles['play-list']}> <Usertop25 token={this.props.token}/></div>
  
    </div>
    <UserResults/>
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
