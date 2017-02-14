<template lang="pug">
  #app
    navigation
    router-view.router
</template>

<script>
import Landing from './components/Landing.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Landing, Navigation
  }
}
</script>

<style lang="stylus">
  /* Global Styles */
  @import 'styles/global.styl'
  @import 'styles/vars.styl'

  body
    margin 0

  h1
    color $primary-color
    
  .router
    margin-top 80px !important
</style>
