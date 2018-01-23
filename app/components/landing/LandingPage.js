import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../../../actions/counterActions'

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
        <h1>You Have Reached The Landing Pageroonie DooDoo</h1>
      </div>
    )
  }
}

/* LandingPage.contextTypes = {
  router: PropTypes.object
}

export default LandingPage */

LandingPage.propTypes = {
  counter: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage)
