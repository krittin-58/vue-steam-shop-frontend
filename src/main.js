import Vue from 'vue'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'
import store from './store'

import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)

Vue.config.productionTip = false

let app = ''

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbULXuvw7jQW2udCnTpxBhNokqNkpX2KE",
  authDomain: "vue-steam-shop.firebaseapp.com",
  projectId: "vue-steam-shop",
  storageBucket: "vue-steam-shop.appspot.com",
  messagingSenderId: "868790600334",
  appId: "1:868790600334:web:cee87df01d05eed51fbfdf",
  measurementId: "G-YRBZ2LP176"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
    router,
    store,
    render: h => h(App)
    }).$mount('#app')
  }
});