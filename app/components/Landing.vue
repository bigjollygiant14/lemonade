<template lang="pug">
  #landing
    h1 {{ title }}
    calendar
</template>

<script>
import Calendar from './Calendar.vue'

export default {
  name: 'landing',
  components: {
    Calendar
  },
  data () {
    return {
      title: 'Landing'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../node_modules/jeet/styl'
@import '../styles/vars.styl'

#landing
  center($container-width)
</style>
