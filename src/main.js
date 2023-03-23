import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from "bootstrap-vue";
import '@fortawesome/fontawesome-free/css/all.css'
import Vuelidate from "vuelidate";

// import socket from './socket';
// eslint-disable-next-line
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.js'


Vue.use(Vuelidate);
// Vue.use(VueSocketIOExt, socket);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

// Vue.prototype.$socket = socket
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
