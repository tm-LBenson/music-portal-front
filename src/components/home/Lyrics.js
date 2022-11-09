// import React, { Component } from 'react'

// export default class Lyrics extends Component {

//   if (this.state.accessToken) {
//     this.props.onGetToken(this.state.accessToken) // SENDING ACCESS TOKEN TO PARENT ELEMENT
//   }
//   if (!this.state.refreshToken || !this.state.expiresIn) return

//   const interval = setInterval(() => {
//     axios
//       .post("http://localhost:3001/refresh", {
//         refreshToken: this.state.refreshToken,
//       })
//       .then(res => {
//         this.setState({
//           accessToken: res.data.accessToken,
//           expiresIn: res.data.expiresIn
//         })
//       })
//       .catch((error) => {
//         console.log(error.message)
//         window.location = "/"
//       })


//   render() {
//     return (
//       <div className='text-center' style={{ whiteSpace: 'pre'}}>{lyrics}</div>
//     )
//   }
// }
