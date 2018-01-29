import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../../actions/counterActions'
import CurrentPriceTable from '../../components/currentPriceTable/CurrentPriceTable'

export class LandingPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      counter: this.props.counter || 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment () {
    this.props.counterActions.incrementCounter()
  }

  decrement () {
    this.props.counterActions.decrementCounter()
  }

  render () {
    return (
      <div className="landing-page">
        {/* Welcome Component */}
        <div className="container">
          <h2>Nice one, Granny! You have 5 BTC.</h2>
        </div>
        {/* Current Price Component */}
        <div className="container">
          <CurrentPriceTable />
        </div>
      </div>
    )
  }
}

LandingPage.propTypes = {
  counter: PropTypes.number.isRequired,
  counterActions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps (dispatch) {
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage)
