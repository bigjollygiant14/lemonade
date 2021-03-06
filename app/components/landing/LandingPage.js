import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../../actions/counterActions'

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
        <h1>You Have Reached The Landing Pageroonie DooDoo</h1>
        <h2>{this.props.counter}</h2>
        <button onClick={this.increment}>Up</button>
        <button onClick={this.decrement}>Down</button>
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
