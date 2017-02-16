<template lang="pug">
  #trips
    h1 {{ title }}

    .list-options
      div
        button(v-on:click='show = true') Add a Trip

    .trip-list
      .headers
        div Title
        div Start Date
        div End Date
        div Edit
      .list-container
        .list-item(v-for='(trip, index) in trips')
          div
            div(v-show="!trip.edit") {{ trip.title || '-' }}
            div(v-show="trip.edit")
              input(v-model="trip.title")
          div 
            div(v-show="!trip.edit") {{ dateFilter(trip.start_date, 'MM-DD-YYYY', '/') }}
            div(v-show="trip.edit")
              input(type='date', v-model="trip.start_date")
          div
            div(v-show="!trip.edit") {{ dateFilter(trip.end_date, 'MM-DD-YYYY', '/') }}
            div(v-show="trip.edit")
              input(type='date', v-model="trip.end_date")
          .edit-trip
            div(v-show="!trip.edit")
              button(v-on:click='editTrip(trip)') Edit
              button(class="danger", v-on:click='showDeleteModal(trip._id, index)') Delete
            div(v-show="trip.edit")
              button(v-on:click='editTrip(trip)') Cancel
              button(class="success", v-on:click='updateTrip(trip, index)') Save

          .expand-details
            a(v-on:click="moreDetails(trip)") <i class="chevron" v-bind:class="{ 'chevron-down': !trip.showMore, 'chevron-up': trip.showMore }"></i>Show <span v-show="!trip.showMore">More</span><span v-show="trip.showMore">Less</span>

          .more-details(v-show="trip.showMore")
            div
              label Description
              div(v-show="!trip.edit") {{ trip.description || '-' }}
              div(v-show="trip.edit")
                textarea(v-model="trip.description")
            div
              Label Notes
              div(v-show="!trip.edit") {{ trip.notes || '-' }}
              div(v-show="trip.edit")
                textarea(v-model="trip.notes")

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
        button(class="success" v-on:click='addTrip') Save

    Modal(v-if="showDeleteModalBoolean", :showModal="showDeleteModalBoolean", v-on:close="closeModal")
      h2(slot="header") Delete a Trip
      div(slot="body")
        h3 Warning! You are about to delete this trip. Are you sure you want to continue?
      div(slot="footer", class="add-trip-footer")
        button(v-on:click='closeModal') No, take me back. 
        button(class="danger" v-on:click='deleteTrip') Yes, delete this trip
</template>

<script>
import Modal from './Modal.vue'
import tripsService from '../services/trips.service.js'
import dateFilter from '../services/date.filter.js'
import _ from 'lodash'

export default {
  name: 'trips',
  components: {
    Modal
  },
  methods: {
    addTrip: addTrip,
    closeModal: closeModal,
    deleteTrip: deleteTrip,
    editTrip: editTrip,
    moreDetails: moreDetails,
    showDeleteModal: showDeleteModal,
    updateTrip: updateTrip,
    validate: validate,
    dateFilter
  },
  created: function () {
    let vm = this

    if (!vm.$root.$data.myTrips.length) {
      tripsService.methods.getTrips('589263e3e7e17c0bec0cfe2b').then(response => {
        for (let i = 0; i < response.body.length; i++) {
          response.body[i].edit = false
          response.body[i].showMore = false
        }

        vm.trips = response.body
        vm.$root.$data.myTrips = response.body
      }, response => {
        console.log('err', response)
      })
    } else {
      vm.trips = _.clone(vm.$root.$data.myTrips)
    }
  },
  data () {
    return {
      title: 'My Trips',
      show: false,
      showDeleteModalBoolean: false,
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
      newTripCopy: {
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

function addTrip () {
  let vm = this
  let validated = vm.validate(vm.newTrip)

  if (validated) {
    let payload = {}

    for (let property in vm.newTrip) {
      payload[property] = vm.newTrip[property].value
    }

    tripsService.methods.addTrip(payload).then(response => {
      console.log('200', response.body)

      // attach view helpers
      response.body.edit = false
      response.body.showMore = false

      // update model -- only need to update root since its a shallow clone
      vm.$root.$data.myTrips.push(response.body)

      // clear form
      vm.newTrip = _.cloneDeep(vm.newTripCopy)
    }, response => {
      console.log('err', response)
    })

    vm.closeModal()
  }
}

function closeModal () {
  let vm = this
  vm.show = false
  vm.showDeleteModalBoolean = false
}

function deleteTrip () {
  let vm = this

  tripsService.methods.deleteTrip(vm.deleteTripObject.id).then(response => {
    // update model
    vm.$root.$data.myTrips.splice(vm.deleteTripObject.index, 1)

    // close modal
    vm.showDeleteModalBoolean = false

    // nullify temporary object
    vm.deleteTripObject = {
      id: null,
      index: null
    }
  }, response => {
    console.log('err', response)
  })
}

function editTrip (object) {
  /* eslint-disable no-unneeded-ternary */
  // object.edit is not defined until clicked for the first time
  object.edit = !object.edit ? true : false
  /* eslint-enable no-unneeded-ternary */

  if (object.edit) object.showMore = true
  // object.showMore = !object.edit ? true : false;
}

function moreDetails (object) {
  object.showMore = !object.showMore
}

function showDeleteModal (id, index) {
  let vm = this

  vm.deleteTripObject = {
    id: id,
    index: index
  }
  vm.showDeleteModalBoolean = true
}

function updateTrip (object, index) {
  let vm = this
  let validated = vm.validate(object)
  let failCopy = _.cloneDeep(object)

  if (validated) {
    let payload = {}

    // filter out view and vue applied properties
    for (let property in object) {
      if (property === 'title' || property === 'description' || property === 'notes' || property === 'start_date' || property === 'end_date' || property === '_id') {
        payload[property] = object[property]
      }
    }

    tripsService.methods.updateTrip(object._id, payload).then(response => {
      vm.trips[index].edit = false
    }, response => {
      console.log('err', response)
      vm.trips[index] = failCopy
    })
  }
}

function validate (object) {
  for (let field in object) {
    if (object[field].value === '' && object[field].required === true) {
      object[field].error = true
      return false
    } else if (object[field].error) {
      object[field].error = false
    }
  }

  return true
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

    .headers, .list-item
      clearfix()
      
      border-bottom 1px solid lighten($gray-2, 20%)
      margin-bottom 10px
      
      &:last-child
        border-bottom none
        margin-bottom 0

      > div
        column(1/4)
        
        &.edit-trip
          margin-right 0

          button
            min-width 55px
            margin-right 10px

            &:last-child
              margin-right 0

        &.expand-details, &.more-details
          column(1)
          margin-bottom 5px

        &.expand-details
          position relative
          text-align right

          a
            font-size $font-sml
            &:hover
              cursor pointer
              text-decoration underline

            i
              margin-right 0.5em
              &.chevron-up
                &:before
                  top 0.8em

        &.more-details
          label
            font-size $font-sml
            text-decoration underline

          > div
            column(1/2)

  .list-options
    clearfix()

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
