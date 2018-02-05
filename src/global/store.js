/**
 * Created by 熊超超 on 2017/8/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: {
    count: 0,
    show: false,
    text: ''
  }
}

const getters = {}
const mutations = {
}
const actions = {}

const store = new Vuex.Store({
  strict: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
})

export default store
