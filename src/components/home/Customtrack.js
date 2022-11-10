import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import axios from 'axios';

export default class Customtrack extends Component {
  constructor() {
    super()
    this.state ={ }

  }

   getPlaylist = async () => {
    try {
      const url = `http://localhost:3001/play-list/${this.props.user_id}`
      const data = await axios({
        method: 'get', //you can set what request you want to be
        url: url,
        data: {},
        headers: {}
      })
      this.setState({ playlist: data.data }, () => console.log(this.state.playlist))
    } catch (error) {
      console.error(error.message)
    }
  }
  
 componentDidMount() {
  setTimeout(this.getPlaylist,2000)
 }

  render() {
    console.log(this.props)
    return (
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>
            Test Item
          </Accordion.Header>
          <Accordion.Body>Body Test dshiufhdseawiufhedwiufheuwiohfewuiofheuiwhfuiewhfuiewhfuiewhfhewufhuwehfiuhewfiuhewfiuhew</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  }
}
