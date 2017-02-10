<template lang="pug">
  #trips
    h1 {{ title }}

    .list-options
      div
        button(v-on:click='show = true') Add a Trip

    .trip-list
      .headers
        div Title
        div Description
        div Start Date
        div End Date
        div Edit
      .list(v-for='trip in trips')
        div {{trip.title}}
        div {{trip.description}}
        div {{trip.start_date}}
        div {{trip.end_date}}
        div Edit Button

    Modal(v-if="show", :showModal="show", v-on:close="closeModal")
      h2(slot="header") New Trip
      div(slot="body")
        form
          .input-group
            label Title
            input(v-model="newTrip.title")
          .input-group
            label Description
            textarea(v-model="newTrip.description")
          .input-group
            label Notes
            textarea(v-model="newTrip.notes")
          .input-group
            label Start Date
            input(type='date', v-model="newTrip.start_date")
          .input-group
            label End Date
            input(type='date', v-model="newTrip.end_date")
      div(slot="footer", class="add-trip-footer")
        button(v-on:click='addTrip') Save
        button(v-on:click='closeModal') Cancel
</template>

<script>
import Modal from './Modal.vue'
import tripsService from '../services/trips.service.js'

export default {
  name: 'trips',
  components: {
    Modal
  },
  methods: {
    addTrip: function() {
      let vm = this,
          payload = JSON.parse(JSON.stringify(vm.newTrip));

      tripsService.methods.addTrip(payload).then(response => {
          console.log('200', response.body);
        }, response => {
          console.log('err', response);
        });

      vm.closeModal();
    },
    closeModal: function() {
      let vm = this;
      vm.show = false;
    }
  },
  created: function() {
    let vm = this;

    tripsService.methods.getTrips( '589263e3e7e17c0bec0cfe2b' ).then(response => {
        console.log('200', response.body);
        vm.trips = response.body;
        tripsService.model.myTrips = response.body;
      }, response => {
        console.log('err', response);
      });
  },
  data () {
    return {
      title: 'My Trips',
      show: false,
      newTrip: {
        title: '',
        description: '',
        notes: '',
        start_date: '',
        end_date: '',
        owner_id: '589263e3e7e17c0bec0cfe2b'
      },
      trips: []
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../node_modules/jeet/styl/index.styl'
@import '../styles/vars.styl'

#trips
  background-color $white
  center($container-width)
  border-radius 0 0 5px 5px
  
  .trip-list
    padding 15px

    .headers, .list
      div
        column(1/5)
        
  .list-options
    column(1)
    
    div
      float right
      margin 5px 10px
      
  .add-trip-footer
    display flex
    justify-content space-between
</style>
