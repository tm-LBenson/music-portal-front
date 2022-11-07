import styles from '../stylesheets/SplashPage.module.css'
import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const CLIENT_ID = '75b90235ba3f4956834f605c46d9d923'
const REDIRECT_URI = 'http://localhost:3000/'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'code'
const SCOPE = 'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read'


export default class SplashPage extends Component {




  render() {

    return (
      <>
<div >
<Card className={styles['login']}>
  <Card.Header>Login to Portal via Spotify</Card.Header>
      <Card.Body>

        <Button variant= "primary" className={styles['button']} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Link your Spotify</Button>
        </Card.Body>
      </Card>
      </div>
   
      </>

    )
  }
}
