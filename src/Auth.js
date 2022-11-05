import { Component } from 'react'
import axios from 'axios'
export default class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

    this.setState(this.props)





  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, 'ppp')
    if (prevProps.code !== prevState.code) {
      console.log('update')
      axios
        .post("http://localhost:3001/login", { code: this.state.code })
        .then(res => {
          this.setState({
            code: '',
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
            expiresIn: res.data.expiresIn

          }, this.props.onGetToken(this.state))
        }).catch(error => {
          console.log(error, ' local API error')
          // window.location = '/'
        })
    }
    console.log(this.state)
  }

  render() {
    return (
      null
    )
  }

}
