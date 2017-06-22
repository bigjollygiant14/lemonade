import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as weatherActions from '../../actions/WeatherActions'
/* eslint-disable no-unused-vars */
import MyTransactions from '../transaction/myTransactions/MyTransactionsPage'
import Weather from '../common/WeatherPage'
import { Link } from 'react-router-dom'
/* eslint-enable no-unused-vars */

export class LandingPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      weatherInfo: Object.assign({}, this.props.weatherInfo)
    }
  }

  componentWillMount () {
    this.props.actions.getWeather()
  }

  componentWillReceiveProps (newProps) {
    if (newProps.weatherInfo !== this.props.weatherInfo) {
      this.setState({
        weatherInfo: newProps.weatherInfo
      })
    }
  }

  render () {
    return (
      <div className="landing-page">
        <div className="landing-page__header">
          <Link to="/new" className="landing-page__a button" role="button">New Transaction</Link>
          <Weather weatherInfo={this.state.weatherInfo}/>
        </div>

        <MyTransactions />
      </div>
    )
  }
}

LandingPage.propTypes = {
  actions: PropTypes.object.isRequired,
  weatherInfo: PropTypes.object.isRequired
}

LandingPage.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps (state) {
  return {
    weatherInfo: state.weatherInfo
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(weatherActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
