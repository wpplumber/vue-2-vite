import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    // note the same `pinia` instance can be used across multiple Vue apps on
  // the same page
  pinia,
}).$mount('#app')
