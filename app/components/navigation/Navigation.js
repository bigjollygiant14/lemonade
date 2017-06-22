/* eslint-disable no-unused-vars */
import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import ioClient from 'socket.io-client'
// import Websocket from 'react-websocket'

/* eslint-enable no-unused-vars */

export class NavigationPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      currentValue: '122'
    }
  }

  componentDidMount () {
    // To Do: Change using process.env for dynamic host
    /* const bitcoinSocket = ioClient.connect('http://localhost:5000/api/bitcoin')
    bitcoinSocket.on('priceUpdate', function (data) {
      // console.log('[Navigation.js socket update data: ', data)
      // bitcoinSocket.emit('my other event', { my: 'data' })

      this.setState({
        currentValue: data.response.data.ask
      }) */
    }.bind(this))
  }

  handleData (data) {
    let result = JSON.parse(data)
    // console.log('result', result)
    this.setState({
      currentValue: result.value
    })
  }

  render () {
    return (
      <div className="navigation-page">
        <div className="navigation-page__header">
          <h1><Link to="/" className="navigation-page__a">Lemonade</Link></h1>
          <div><span className="navigation-page__header--accent">Current Value per Bitcoin:</span> ${this.state.currentValue || ''}</div>

          {/* <Websocket url='wss://apiv2.bitcoinaverage.com/websocket/ticker?public_key=MjEzYzIyMWQ3MDc2NDdiZjhhMjgyNmRjNzdmYTUyMjc&ticket=ASDFXZCVASDF2341234'
                     onMessage={this.handleData.bind(this)} /> */}
        </div>
      </div>
    )
  }
}

NavigationPage.contextTypes = {
  router: PropTypes.object
}

export default NavigationPage
