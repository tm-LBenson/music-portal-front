import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from '../stylesheets/HeroTagLine.module.css'

const Motd = 'Find solace in music.'
const smallMotd = 'Live life in full harmony.'
export default class HeroTagLine extends Component {
  render() {
    return (
      <section className={styles.tagline}>
        <Carousel className={styles.carousel} fade>
          <Carousel.Item className={`${styles.carousel} ${styles['carousel__img--container']}`}>
            <div className={styles.gradient}></div>
            <img
              className={`d-block w-100 ${styles.carousel__img}`}
              src="https://images.unsplash.com/photo-1643208589896-07b8feb4dffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="First slide"
            />
            <Carousel.Caption className={styles['carousel__caption']}>
              <h3>{Motd}</h3>
              <p>{smallMotd}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.carousel}>
            <div className={styles.gradient}></div>
            <img
              className={`d-block w-100 ${styles.carousel__img}`}
              src="https://images.unsplash.com/photo-1567535343163-9bba0f61bd09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Second slide"
            />

            <Carousel.Caption className={styles['carousel__caption']}>
              <h3>{Motd}</h3>
              <p>{smallMotd}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.carousel}>
            <div className={styles.gradient}></div>
            <img
              className={`d-block w-100 ${styles.carousel__img}`}
              src="https://images.unsplash.com/photo-1623018035231-ebe361a64c76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Third slide"
            />

            <Carousel.Caption className={styles['carousel__caption']}>
              <h3>{Motd}</h3>
              <p>
                {smallMotd}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    )
  }
}
