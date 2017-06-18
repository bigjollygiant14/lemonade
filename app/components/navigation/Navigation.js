/* eslint-disable no-unused-vars */
import React from 'react'
import { PropTypes } from 'prop-types'
/* eslint-enable no-unused-vars */

export class NavigationPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      currentValue: '122'
    }
  }

  render () {
    return (
      <div className="navigation-page">
        <div className="navigation-page__header">
          <h1>Lemonade</h1>
          <div><span className="navigation-page__header--accent">Current Value per Bitcoin:</span> ${this.state.currentValue || ''}</div>
        </div>
      </div>
    )
  }
}

NavigationPage.contextTypes = {
  router: PropTypes.object
}

export default NavigationPage
