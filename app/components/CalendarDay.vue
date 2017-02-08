<template lang="pug">
  #calendarDay
    div.day {{ day }}
</template>

<script>
export default {
  name: 'calendarDay',
  data () {
    return {
      title: 'calendarDay'
    }
  },
  props: {
    day: {
      type: Number,
      default: '',
      required: false
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import '../styles/vars.styl'

  #calendarDay
    position relative

    .day
      left 5px
      position absolute
      top 5px

</style>
