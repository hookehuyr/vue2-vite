/*
 * @Date: 2022-07-25 11:28:00
 * @LastEditors: hookehuyr hookehuyr@gmail.com
 * @LastEditTime: 2022-07-25 11:28:11
 * @FilePath: /gzs-web/store/index.js
 * @Description: 文件描述
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count(state) {
      return state.count
    }
  },
  mutations: {
    addCount(state, num) {
      state.count += num
    }
  },
  actions: {}
})
