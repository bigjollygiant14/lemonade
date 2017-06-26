import React from 'react'
import { PropTypes } from 'prop-types'

export class WeatherPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      weatherInfo: Object.assign({
        currently: {}
      }, this.props.weatherInfo)
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.weatherInfo !== this.props.weatherInfo) {
      this.setState({
        weatherInfo: newProps.weatherInfo
      })
    }
  }

  render () {
    console.log('Rendering Weather: ', this.state.weatherInfo)
    return (
      <div className="weather-page">
        <div className="weather-page__div">Current Temperature: {this.state.weatherInfo.currently.temperature || ''}<sup>o</sup></div>
      </div>
    )
  }
}

WeatherPage.propTypes = {
  weatherInfo: PropTypes.object.isRequired
}

export default WeatherPage
