import getAge from "@/assets/js/getAge";

const state = () => ({
  firstName: 'Василь',
  lastName: 'Хабибуллин',
  birthday: '1995-09-11',
  email: 'gitkhab@yandex.ru',
  telegram: 'https://t.me/GitKhab',
  github: 'https://github.com/GitKhab'
})

const getters = {
  getPersonFullName(state) {
    return `${state.lastName} ${state.firstName}`;
  },
  getPersonAge(state) {
    return getAge(state.birthday);
  }
}

export default {
  state,
  getters
}
