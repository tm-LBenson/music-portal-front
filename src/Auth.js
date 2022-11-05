import { Component } from 'react'
import axios from 'axios'
export default class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = { code: this.props.code }
  }

  componentDidMount() {

    axios
      .post("http://localhost:3001/login", { code: this.state.code })
      .then(res => {
        this.setState({
          code: this.props.code,
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          expiresIn: res.data.expiresIn
        }, console.log('called local api finished'))
      }).catch(error => {
        console.log(error, ' local API error')
        // window.location = '/'
      })
  }
  render() {
    return (
      null
    )
  }

}
