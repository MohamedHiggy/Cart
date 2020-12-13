import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery;
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

import Notifications from "vue-notification";
Vue.use(Notifications);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')