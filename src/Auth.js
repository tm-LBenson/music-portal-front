import { Component } from 'react'
import axios from 'axios'

/* THIS IS A HELPER COMPONENT THAT DOES NOT RENDER ANYTHING. ITS PURPOSE IS TO RETRIEVE AN ACCESS KEY FROM THE BACKEND */
export default class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

    this.setState(this.props) // SETTING STATE HERE TO FORCE AN UPDATE AND HAVE ACCESS TO PREVPROPS TO PREVENT ERASING ACCESS KEY
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.code !== prevState.code) {

      axios
        .post("http://localhost:3001/login", { code: this.state.code })
        .then(res => {
          this.setState({
            code: '',
            accessToken: res.data.accessToken, //THIS IS REQUIRED FOR API CALLS TO SPOTIFY
            refreshToken: res.data.refreshToken, //KEYS EXPIRE AFTER 1 HOUR, THIS KEY CAN REFRESH THE ACCESS KEY AUTOMATICALLY
            expiresIn: res.data.expiresIn // TIME LEFT ON THE KEY
          })
        }).catch(error => {
          console.log(error, ' local API error')
          window.location = '/'  //THIS LINE SENDS BACK TO LOGIN SCREEN IF KEY EXPIRES
        })
    }

    /* BELOW IS THE BLOCK FOR REFRESHING THE TOKEN AUTOMATICALLY 60 SECONDS BEFORE IT EXPIRES */
    if (this.state.accessToken) {
      this.props.onGetToken(this.state.accessToken) // SENDING ACCESS TOKEN TO PARENT ELEMENT
    }
    if (!this.state.refreshToken || !this.state.expiresIn) return
  
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken: this.state.refreshToken,
        })
        .then(res => {
          this.setState({
            accessToken: res.data.accessToken,
            expiresIn: res.data.expiresIn
          })
        })
        .catch((error) => {
          console.log(error.message)
          window.location = "/"
        })
    }, (this.state.expiresIn - 60) * 1000) //HOW MUCH TIME BEFORE TOKEN EXPIRES 

    return () => clearInterval(interval)

  }


  render() {

    return (
      null
    )
  }

}
