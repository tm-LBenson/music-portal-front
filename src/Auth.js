import { Component } from 'react'
import axios from 'axios'
export default class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

    if (!this.props.code) {
      this.setState({ code: this.props.code })
      console.log('getting token')
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
  }
  render() {
    return (
      null
    )
  }

}
