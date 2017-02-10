'use strict';

import Vue from 'vue';

const usersService = {
  model: {
    currentUser: {},
  },
  methods: {
    getUser(id) {
      id = '589263e3e7e17c0bec0cfe2b';
      let promise = id ? Vue.http.get('/api/users/' + id) : promise = Vue.http.get('/api/users');

      return promise;
    }
  }
};

export default usersService;