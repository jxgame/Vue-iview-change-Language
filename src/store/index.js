import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state'; //属性
import mutations from './mutations'; //保存方法
import getters from './getters'; //读取
import actions from './actions'; //提交

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

/**
 * 使用方法
 * 
 * 保存:
 * store.dispatch('showLoading', true)
 * 
 * 读取:
 * store.state.showLoading
 */
