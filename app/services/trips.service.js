'use strict';

import Vue from 'vue';

const tripsService = {
  model: {
    myTrips: [],
    allTrips: []
  },
  methods: {
    getTrips(id) {
      let promise = id ? Vue.http.get('/api/trips/' + id) : promise = Vue.http.get('/api/trips');

      return promise;
    },
    addTrip(payload) {
      let promise = Vue.http.post('/api/trips', payload);

      return promise;
    },
    deleteTrip(id) {
      let promise = Vue.http.delete('/api/trips/' + id);

      return promise;
    }
  }
};

export default tripsService;