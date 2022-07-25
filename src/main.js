/*
 * @Date: 2022-07-25 11:01:23
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2022-07-25 11:28:27
 * @FilePath: /gzs-web/src/main.js
 * @Description: 文件描述
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
