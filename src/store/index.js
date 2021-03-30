import Vue from 'vue'
import Vuex from 'vuex'
import website from '@/store/modules/website'
import getAge from "@/assets/js/getAge";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: {
      firstName: 'Василь',
      lastName: 'Хабибуллин',
      birthday: '1995-09-11',
      email: 'gitkhab@yandex.ru',
      telegram: 'https://t.me/GitKhab',
      github: 'https://github.com/GitKhab'
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
  modules: {
    website
  }
})
