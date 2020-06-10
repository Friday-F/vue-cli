// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/index.css'
import store from './store/index.js'

Vue.config.productionTip = false
import './components/common/Alert/Alert';
import './components/common/Confirm/Confirm';
import VueLocalStorage from 'vue-ls';
Vue.use(VueLocalStorage);
/* eslint-disable no-new */


const EventBus = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Object.defineProperties(Vue.prototype, {
  $bus: {
      get: function () {
          return EventBus
      }
  }
})
