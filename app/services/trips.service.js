'use strict'

import Vue from 'vue'

const tripsService = {
  methods: {
    addTrip (payload) {
      let promise = Vue.http.post('/api/trips', payload)

      return promise
    },
    deleteTrip (id) {
      let promise = Vue.http.delete('/api/trips/' + id)

      return promise
    },
    getTrips (id) {
      let promise = id ? Vue.http.get('/api/trips/' + id) : Vue.http.get('/api/trips')

      return promise
    },
    updateTrip (id, payload) {
      let promise = Vue.http.put('/api/trips/' + id, payload)

      return promise
    }
  }
}

export default tripsService
