import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextAreaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextAreaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyD4ofrMDQGUj4d4LxccORsWyHM5WJxTQw8',
  authDomain: 'vue-calendar-ec717.firebaseapp.com',
  databaseURL: 'https://vue-calendar-ec717.firebaseio.com',
  projectId: 'vue-calendar-ec717',
  storageBucket: 'vue-calendar-ec717.appspot.com',
  messagingSenderId: '30068519959',
  appId: '1:30068519959:web:927046d4487a8f8dead852',
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
