import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    domain: {
      sld: 'GitKhab',
      tld: 'com'
    },
    cv: {
      positions: [
        { position: 'html-верстальщик' },
        { position: 'junior frontend-разработчик' }
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
