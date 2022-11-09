import { Component } from 'react'
import axios from 'axios'

export default class DailyHomeCard extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  getFeatured = async () => {
    try {
      console.log(this.props)
      console.log('getting data')
      const data = await axios({
        method: 'get', //you can set what request you want to be
        url: '	https://api.spotify.com/v1/browse/featured-playlists?limit=6',
        data: {},
        headers: {
          'Authorization': 'Bearer ' + this.state.token,
          'accept': 'application/json',
          'Content-type': 'application/json',
        }
      })
      this.setState({ featured: data.data }, () => this.props.passDataUp(this.state.featured))
    } catch (error) {
      console.error(error.message)
    }
  }
  componentDidMount() {
    this.setState({ token: this.props.token }, () => {
      this.getFeatured()
    });

  }
  render() {

    return (
      null
    )
  }
}
