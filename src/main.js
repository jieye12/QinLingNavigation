import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/common.css'
import './element-ui/element.js'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://47.100.16.28/qinlin'
axios.interceptors.request.use(config => {
  // 为请求头对象，添加Token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
