import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import VueGoodTablePlugin from "vue-good-table";
import "vue-good-table/dist/vue-good-table.css";

Vue.config.productionTip = false
Vue.use(VueGoodTablePlugin);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
