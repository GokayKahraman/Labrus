import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import "tailwindcss/tailwind.css"
import router from './router/index'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

