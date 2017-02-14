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
      .list(v-for='(trip, index) in trips')
        div {{ trip.title || '-' }}
        div {{ trip.description || '-' }}
        div {{ dateFilter(trip.start_date, 'MM-DD-YYYY', '/') }}
        div {{ dateFilter(trip.end_date, 'MM-DD-YYYY', '/') }}
        .edit-trip
          button Edit
          button(class="danger", v-on:click='deleteTrip(trip._id, index)') Delete

    Modal(v-if="show", :showModal="show", v-on:close="closeModal")
      h2(slot="header") Add a New Trip
      div(slot="body")
        form
          .input-group(v-bind:class="{ error: newTrip.title.error }")
            label Title <span class='required'>*</span>
            input(v-model="newTrip.title.value")
          .input-group
            label Description
            textarea(v-model="newTrip.description.value")
          .input-group
            label Notes
            textarea(v-model="newTrip.notes.value")
          .input-group(v-bind:class="{ error: newTrip.start_date.error }")
            label Start Date <span class='required'>*</span>
            input(type='date', v-model="newTrip.start_date.value")
          .input-group(v-bind:class="{ error: newTrip.end_date.error }")
            label End Date <span class='required'>*</span>
            input(type='date', v-model="newTrip.end_date.value")
      div(slot="footer", class="add-trip-footer")
        button(class="danger" v-on:click='closeModal') Cancel
        button(v-on:click='addTrip') Save
</template>

<script>
import Modal from './Modal.vue'
import tripsService from '../services/trips.service.js'
import dateFilter from '../services/date.filter.js'

export default {
  name: 'trips',
  components: {
    Modal
  },
  methods: {
    addTrip: function() {
      let vm = this,
          validated = vm.validate();

      if (validated) {
        let payload = {};

        for (let property in vm.newTrip) {
          payload[property] = vm.newTrip[property].value;
        }

        // payload = JSON.parse(JSON.stringify(vm.newTrip));
        tripsService.methods.addTrip(payload).then(response => {
            console.log('200', response.body);
            vm.trips.push(response.body)
          }, response => {
            console.log('err', response);
          });

        vm.closeModal();
      }

    },
    closeModal: function() {
      let vm = this;
      vm.show = false;
    },
    deleteTrip: function(id, index) {
      let vm = this;

      tripsService.methods.deleteTrip(id).then(response => {
          console.log('200', response.body);
          vm.trips.splice(index, 1);
        }, response => {
          console.log('err', response);
        });
    },
    validate: function() {
      let vm = this;

      for (let field in vm.newTrip) {
        if (vm.newTrip[field].value === '' && vm.newTrip[field].required === true) {
          vm.newTrip[field].error = true;
          return false;
        } else if (vm.newTrip[field].error) {
          vm.newTrip[field].error = false;
        }
      }

      return true;
    },
    dateFilter
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
        title: {
          value: '',
          required: true,
          error: false
        },
        description: {
          value: '',
          required: false,
          error: false
        },
        notes: {
          value: '',
          required: false,
          error: false
        },
        start_date: {
          value: '',
          required: true,
          error: false
        },
        end_date: {
          value: '',
          required: true,
          error: false
        },
        owner_id: {
          value: '589263e3e7e17c0bec0cfe2b',
          required: false,
          error: false
        }
      },
      tripError: {
        title: false,
        start_date: false,
        end_date: false
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
        margin-bottom 5px

    .edit-trip
      button
        min-width 55px
        margin-right 10px

        &:last-child
          margin-right 0

  .list-options
    column(1)
    
    div
      float right
      margin 5px 10px

  .add-trip-footer
    display flex
    justify-content space-between
    
  .required
    color $warning
    
  .error
    input
      border-color $warning
      background-color lighten($warning, 50%)

</style>
