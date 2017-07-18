/* eslint-disable no-unused-vars */
import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import * as BitcoinActions from '../../actions/BitcoinActions'
// import Websocket from 'react-websocket'
/* eslint-enable no-unused-vars */

export class NavigationPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      currentBitcoinPrice: Object.assign({}, props.currentBitcoinPrice),
      mobileNavOpen: false,
      valueDrop: false // false means price went up or stayed the same, true means price went down
    }

    this.openMobileNav = this.openMobileNav.bind(this)
    this.renderMobileNav = this.renderMobileNav.bind(this)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.currentBitcoinPrice !== this.props.currentBitcoinPrice) {
      let valueDrop = newProps.currentBitcoinPrice.ask < this.props.currentBitcoinPrice.ask

      this.setState({
        currentBitcoinPrice: newProps.currentBitcoinPrice,
        valueDrop: valueDrop
      })
    }
  }

  openMobileNav () {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    })
  }

  renderMobileNav () {
    return (
      <div className="navigation-page__mobile">
        <p>Mobile Nav</p>
      </div>
    )
  }

  /* handleData (data) {
    let result = JSON.parse(data)
    // console.log('result', result)
    this.setState({
      currentValue: result.value
    })
  } */

  render () {
    return (
      <div className="navigation-page">
        <div className="navigation-page__header">
          <div className="navigation-page--show-mobile navigation-page--padding" onClick={this.openMobileNav}>
            <i className="fa fa-bars" aria-hidden="true" />
          </div>
          <h1><Link to="/" className="navigation-page__a">Lemonade</Link></h1>
          <div>
            <span className="navigation-page__header--accent navigation-page--hide-mobile">Current Value per Bitcoin:</span>
            <span className="navigation-page__header--accent navigation-page--show-mobile">USD to BTC:</span>
            <span> ${this.state.currentBitcoinPrice.ask || ''}</span>
          </div>

          {/* <Websocket url='wss://apiv2.bitcoinaverage.com/websocket/ticker?public_key=MjEzYzIyMWQ3MDc2NDdiZjhhMjgyNmRjNzdmYTUyMjc&ticket=ASDFXZCVASDF2341234'
                     onMessage={this.handleData.bind(this)} /> */}
        </div>
      </div>
    )
  }
}

NavigationPage.propTypes = {
  actions: PropTypes.object.isRequired,
  currentBitcoinPrice: PropTypes.object.isRequired
}

NavigationPage.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps (state) {
  return {
    currentBitcoinPrice: state.currentBitcoinPrice
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(BitcoinActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationPage)
