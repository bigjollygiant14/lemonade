'use strict'

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import VueResource from 'vue-resource';

// Router
Vue.use(VueRouter)

import Landing from './components/Landing.vue'
import Trips from './components/Trips.vue'
import Admin from './components/Admin.vue'

const routes = [{
  path: '/',
  component: Landing
}, {
  path: '/trips',
  component: Trips
}, {
  path: '/admin',
  component: Admin
}];

const router = new VueRouter({
  routes: routes
});

// HTTP Resource
Vue.use(VueResource)

new Vue({
  router,
  el: '#app',
  data: {
    trips: [],
    myTrips: [],
    currentUser: {}
  },
  render: (h) => h(App)
});
