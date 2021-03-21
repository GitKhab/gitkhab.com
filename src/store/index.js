import Vue from 'vue'
import Vuex from 'vuex'
import getAge from "@/assets/js/getAge";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: {
      firstName: 'Василь',
      lastName: 'Хабибуллин',
      birthday: '1995-09-11'
    },
    domain: {
      sld: 'GitKhab',
      tld: 'com'
    }
  },
  getters: {
    getPersonFullName(state) {
      return `${state.person.lastName} ${state.person.firstName}`;
    },
    getPersonAge(state) {
      return getAge(state.person.birthday);
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
