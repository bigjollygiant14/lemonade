'use strict';

import Vue from 'vue';

const tripsService = {
  model: {
    name: 'admin'
  },
  methods: {
    getTrips(id) {
      let promise = id ? Vue.http.get('/api/trips/' + id) : promise = Vue.http.get('/api/trips');

      return promise;
    },
    addTrip(payload) {
      /* Vue.http.post('/api/trips', payload).then(response => {
        console.log('200', response);
      }, response => {
        console.log('err', response);
      }); */

      let promise = Vue.http.post('/api/trips', payload);

      return promise;
    }
  }
};

export default tripsService;