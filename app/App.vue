<template lang="pug">
  #app
    router-view
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style lang="stylus">
  /* Global Styles */
</style>
