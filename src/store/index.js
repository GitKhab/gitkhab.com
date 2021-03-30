import Vue from 'vue'
import Vuex from 'vuex'
import website from '@/store/modules/website'
import person from '@/store/modules/person'
import resume from '@/store/modules/resume'
import education from '@/store/modules/education'
import subjects from '@/store/modules/subjects'
import skills from '@/store/modules/skills'
import expectations from '@/store/modules/expectations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    website,
    person,
    resume,
    education,
    subjects,
    skills,
    expectations
  }
})
