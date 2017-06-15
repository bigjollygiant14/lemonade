import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

export class NavigationPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {}
  }

  render () {
    return (
      <div className="navigation-page">
        <div className="navigation-page__link-header">
          <div>Logo</div>
        </div>

        <div className="navigation-page__link-container">
          <h4>Links</h4>

          <Link to="/">Home</Link>
          <Link to="/video">Video</Link>
        </div>
      </div>
    )
  }
}

NavigationPage.contextTypes = {
  router: PropTypes.object
}

export default NavigationPage
