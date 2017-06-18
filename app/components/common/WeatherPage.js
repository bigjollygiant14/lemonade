import React from 'react'
import { PropTypes } from 'prop-types'

export class WeatherPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      weatherInfo: Object.assign({}, this.props.weatherInfo)
    }
  }

  render () {
    return (
      <div className="weather-page">
        <div className="weather-page__div">87 <span className="weather-page__span">o</span></div>
      </div>
    )
  }
}

WeatherPage.propTypes = {
  weatherInfo: PropTypes.object.isRequired
}

export default WeatherPage
