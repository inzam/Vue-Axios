import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vueaxios-30a34.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'common auth'
axios.defaults.headers.get['Accepts'] = 'applicaiton/json'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
