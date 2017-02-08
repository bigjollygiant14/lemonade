<template lang="pug">
  #calendar
    h1 {{ title }}
    .table-container
      table
        thead
          tr
            td.month {{ month }}
          tr
            th(v-for='day in days') {{ day }}
        tbody
          tr(v-for='week in renderWeeks()')
            td(v-for='(day, index) in 7')
              div {{ day }}
              CalendarDay(:day=Number(day))
</template>

<script>
import CalendarDay from './CalendarDay.vue'

export default {
  name: 'calendar',
  methods: {
    daysInMonth: daysInMonth,
    renderWeeks: renderWeeks
  },
  components: {
    CalendarDay
  },
  created () {
    // renderWeeks();
  },
  data () {
    return {
      title: 'Calendar',
      month: 'February',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayCount: 0
    }
  }
}

function daysInMonth(month) {
  let now = new Date(),
      days = 0;

  if (month) days = new Date(now.getFullYear(), month, 0).getDate();
  else days = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();

  return days;
}

function firstDayInMonth(month) {
  let now = new Date(),
      day = 0;

  if (month) day = new Date(now.getFullYear(), month, 1).getDay();
  else day = new Date(now.getFullYear(), now.getMonth(), 1).getDay();

  return day;
}

function renderWeeks() {
  let vm = this,
      totalDays = daysInMonth(),
      firstDay = firstDayInMonth();

  let weeks = Math.ceil((totalDays + firstDay) / 7);

  return weeks;
}

function getDay(day) {
  let vm = this,
      firstDay = firstDayInMonth();

  /* console.log('week', week);
  console.log(vm.dayCount, firstDay);

  if (week === 1 && vm.dayCount !== firstDay) {
    // week not started yet
    return null
  } else if (week === 1 && vm.dayCount === firstDay) {
    // first day
    vm.dayCount = 1;
    return vm.dayCount;
  } else {
    // every other day
    vm.dayCount ++;
    return vm.dayCount - 1;
  } */
  console.log(day);
  return Number(day);
}
</script>

<style lang="stylus" scoped>
  @import '../../node_modules/jeet/styl'
  @import '../styles/vars.styl'

  #calendar
    background-color $white
    border-radius 5px
    padding 10px
    width 100%

  .table-container
    padding 15px 0

  table
    border-spacing 0
    width 100%

    td, th
      column(1/7)
      padding 0

    thead
      tr
        th
          position relative
          text-align center
          
          &:after
            border-bottom 1px solid $gray-2
            position absolute
            width 125%
            
          &:last-child
            &:after
              width 100%

        td
          &.month
            column(1)
            font-size $font-lrg
            margin-bottom 20px
            text-align center
            
    tbody
      td
        height 100px
        position relative
</style>
