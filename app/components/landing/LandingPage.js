import React from 'react'
import { PropTypes } from 'prop-types'

export class LandingPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {}
  }

  render () {
    /* const {
      accountData
    } = this.props */

    return (
      <div className="landing-page">
        <h1>You Have Reached The Landing Page</h1>
      </div>
    )
  }
}

LandingPage.contextTypes = {
  router: PropTypes.object
}

export default LandingPage
