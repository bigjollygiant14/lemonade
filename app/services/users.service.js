'use strict';

import Vue from 'vue';

const usersService = {
  methods: {
    addUser(payload) {
      let promise = Vue.http.post('/api/users', payload);

      return promise;
    },
    getUsers(id) {
      id = id || '589263e3e7e17c0bec0cfe2b';
      let promise = id ? Vue.http.get('/api/users/' + id) : promise = Vue.http.get('/api/users');

      return promise;
    },
    deleteUser(id) {
      let promise = Vue.http.delete('/api/users/' + id);

      return promise;
    },
    updateUser(id, payload) {
      let promise = Vue.http.put('/api/users/' + id, payload);

      return promise;
    }
  }
};

export default usersService;