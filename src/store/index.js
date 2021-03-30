import Vue from 'vue'
import Vuex from 'vuex'
import website from '@/store/modules/website'
import person from '@/store/modules/person'
import resume from '@/store/modules/resume'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    website,
    person,
    resume
  }
})
