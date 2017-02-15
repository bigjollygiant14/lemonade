'use strict';

import Vue from 'vue';

const weatherService = {
  methods: {
    getWeather() {
      let promise = Vue.http.get('/api/weather');

      return promise;
    }
  }
};

export default weatherService;