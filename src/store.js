import Vue from 'vue'
import Vuex from 'vuex'
import { GET_PACKAGES, SET_LEVEL } from './const-type'
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
