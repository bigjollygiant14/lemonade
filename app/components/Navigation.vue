<template lang="pug">
  #navigation
    .nav-container
      .nav-links
        router-link(:to='link.link' v-for='link in links') {{ link.name }}
      .weather-peek
        div.now Currently it's <span class='accent'>{{ number(weather.currently.temperature) }}</span> and <span class='accent'>{{ weather.currently.summary }}</span>
        div.summary {{ weather.daily.summary }}
</template>

<script>
import number from '../services/number.filter.js'

export default {
  name: 'navigation',
  methods: {
    number
  },
  data () {
    return {
      message: 'Navigation Component',
      links: [
        {
          name: 'Home',
          link: '/'
        }, {
          name: 'My Trips',
          link: '/trips'
        }/*, {
          name: 'Admin',
          link: '/admin'
        }*/
      ],
      weather: {
        'currently': {
          'time': 1486151463,
          'summary': 'Clear',
          'icon': 'clear-day',
          'nearestStormDistance': 55,
          'nearestStormBearing': 92,
          'precipIntensity': 0,
          'precipProbability': 0,
          'temperature': 34.25,
          'apparentTemperature': 31.59,
          'dewPoint': 30.12,
          'humidity': 0.85,
          'windSpeed': 3.21,
          'windBearing': 229,
          'visibility': 5.82,
          'cloudCover': 0.22,
          'pressure': 1016.35,
          'ozone': 316.53
        },
        'daily': {
          "summary": "Mixed precipitation throughout the week, with temperatures rising to 47°F on Wednesday.",
          "icon": "snow",
          "data": [
            {
              "time": 1486105200,
              "summary": "Snow (1–3 in.) in the morning and afternoon.",
              "icon": "snow",
              "sunriseTime": 1486131352,
              "sunsetTime": 1486168144,
              "moonPhase": 0.24,
              "precipIntensity": 0.0039,
              "precipIntensityMax": 0.0216,
              "precipIntensityMaxTime": 1486188000,
              "precipProbability": 0.6,
              "precipType": "snow",
              "precipAccumulation": 1.007,
              "temperatureMin": 21.42,
              "temperatureMinTime": 1486134000,
              "temperatureMax": 35.08,
              "temperatureMaxTime": 1486155600,
              "apparentTemperatureMin": 17.08,
              "apparentTemperatureMinTime": 1486188000,
              "apparentTemperatureMax": 31.41,
              "apparentTemperatureMaxTime": 1486155600,
              "dewPoint": 24.62,
              "humidity": 0.88,
              "windSpeed": 3.42,
              "windBearing": 231,
              "visibility": 5.31,
              "cloudCover": 0.63,
              "pressure": 1020.04,
              "ozone": 319.75
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../node_modules/jeet/styl/index.styl'
  @import '../styles/vars.styl'

  #navigation
    background-color $white
    height 70px
    left auto
    position fixed
    right auto
    top 0
    width 100%
    z-index 10

  .nav-container
    center($container-width)
    height 100%
    position relative

  .nav-links
    column(5/8)
    height 100%
    position relative

    a
      column(1/4)
      height 35px
      margin-right 0
      padding 35px 3% 0 15px
      position relative
      transition all 0.5s

      &:before
        border-left 1px solid $gray-2
        content ''
        height 100%
        left 0
        position absolute
        top 0

      &:hover
        background-color $primary-color
        color $white
        transition all 0.5s

  .weather-peek
    align-items flex-start
    column(3/8)
    display flex
    flex-direction column
    font-size $font-sml
    height 100%
    justify-content space-around
    position relative

    .accent
      color $primary-color
      font-size $font-med

</style>
