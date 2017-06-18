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
    this.props.actions.getWeather().then((response) => {
      // toastr.clear();
      // toastr.success('Preferences saved!', 'Success');
      console.log('success: ', response)
    })
      .catch((err) => {
        /* toastr.options.closeDuration = 5000;
        toastr.clear();
        toastr.error('Preferences were not saved due to the following error: ' + err, 'Error'); */
        console.log('error: ', err)
      })
  }

  componentWillReceiveProps (newProps) {
    if (newProps.weatherInfo !== this.props.weatherInfo) {
      this.setState({
        weatherInfo: newProps.weatherInfo
      })
    }
  }

  render () {
    /* const {
      accountData
    } = this.props */

    return (
      <div className="landing-page">
        <div className="landing-page__header">
          <Link to='/new' className="landing-page__a">New Transaction</Link>
          <Weather weatherInfo={this.state.weatherInfo}/>
        </div>

        <MyTransactions />
      </div>
    )
  }
}

LandingPage.propTypes = {
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
