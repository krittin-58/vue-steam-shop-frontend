import Vue from 'vue'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import App from './App.vue'
import router from './router'
import store from './store'

import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)

Vue.config.productionTip = false

Vue.filter('currency', function (value) {
  return '฿' + parseFloat(value).toFixed(2);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
