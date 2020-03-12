import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import Vuelidate from 'vuelidate'
import Pagination from './pages/Pagination'

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.component('pagBar', Pagination);


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
