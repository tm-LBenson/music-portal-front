import React, { Component } from 'react'


import axios from 'axios'



constructor() {
  super()
  this.state = {
    
    UserTop: ''

    
  }
  console.log(UserTop)
}
getData = async () => {
    let type = request.query.type
    let timeRange = request.query.timeRange;
    await axios({
      method: 'get', //you can set what request you want to be
      url: `https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=25`,
      data: {},
      headers: {
        'Authorization': 'Bearer ' + this.state.token,
        'accept': 'application/json',
        'Content-type': 'application/json',
      }
    })
      .then(data => this.setState({

        UserTop: data.data.name
        // trackData: data.
        
      }))

      .catch(error => console.log(error))

  }
  componentDidMount() {
    this.setState({ token: this.props.token })

  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.token !== prevState.token) {
      if (this.state.token) {
        this.getData()
      }


    }
  }



export default class API_Portal extends Component {
  render() {
    return (
      <div>API_Portal</div>
    )
  }
}
