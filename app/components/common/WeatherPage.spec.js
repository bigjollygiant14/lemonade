/* Defaults */
import React from 'react'
import { shallow } from 'enzyme'
/* Get component to be tested */
import WeatherPage from './WeatherPage'

/* Mocks */
function setupMarkup () {
  const props = {
    weatherInfo: {
      currently: {
        apparentTemperature: 66.05,
        humidity: 0.25,
        icon: 'clear-day',
        summar: 'Clear',
        temperature: 68,
        time: 1497812237
      }
    }
  }

  return shallow(<WeatherPage {...props} />)
}

describe('WeatherPage', () => {
  // Mark up
  describe('Markup', () => {
    it('Renders itself', () => {
      const wrapper = setupMarkup()

      expect(wrapper.find('.weather-page').length).toBe(1)
      expect(wrapper.find('.weather-page__div').length).toBe(1)
      expect(wrapper.find('.weather-page__div').text()).toBe('Current Temperature: 68o')
    })
  })

  describe('Methods', () => {

  })
})
