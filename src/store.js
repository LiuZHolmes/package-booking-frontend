import Vue from 'vue'
import Vuex from 'vuex'
import { GET_PACKAGES, SET_LEVEL, SET_TAKEN } from './const-type'
Vue.use(Vuex)

const axios = require('axios')

export default new Vuex.Store({
  state: {
    level: 'all',
    packages: []
  },
  mutations: {
    [GET_PACKAGES] (state, payload) {
      state.packages.push(...payload)
      state.index = state.packages.length
    },
    [SET_LEVEL] (state, payload) {
      state.level = payload
    },
    [SET_TAKEN] (state, payload) {
      const index = state.packages.findIndex(x => x.id === payload.id)
      Vue.set(state.packages, index, payload)
    }
  },
  actions: {
    [GET_PACKAGES] (context) {
      axios
        .get('http://localhost:8080/packages')
        .then(res => {
          context.commit(GET_PACKAGES, res.data)
        })
        .catch(error => {
          alert(error)
        })
    },
    [SET_TAKEN] ({ commit, state }, payload) {
      let newItem = state.packages.filter(x => x.id === payload.id)[0]
      newItem.status = payload.status.status
      axios
        .put('http://localhost:8080/packages/' + payload.id, payload.status)
        .then(() => commit(SET_TAKEN, newItem))
        .catch(error => {
          alert(error)
        })
    }
  },
  getters: {
    filterPackages: state => {
      if (state.level === 'all') {
        return state.packages
      }
      return state.packages.filter(x => x.status === state.level)
    }
  }
})
