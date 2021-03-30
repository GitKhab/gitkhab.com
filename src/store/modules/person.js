import getAge from '@/assets/js/getAge'

const state = () => ({
  firstName: 'Василь',
  lastName: 'Хабибуллин',
  birthday: '1995-09-11',
  contactData: {
    github: {
      id: 1,
      text: 'GitHub',
      hyperlink: 'https://github.com/GitKhab',
      icon: {
        path: require('@/assets/svg/sprites/fontawesome.svg'),
        hash: '#github',
      }
    },
    telegram: {
      id: 2,
      text: 'Telegram',
      hyperlink: 'https://t.me/GitKhab',
      icon: {
        path: require('@/assets/svg/sprites/fontawesome.svg'),
        hash: '#telegram-plane',
        modifier: 'contacts__icon_telegram'
      }
    },
    email: {
      id: 3,
      text: 'gitkhab@yandex.ru',
      hyperlink: 'mailto:gitkhab@yandex.ru',
      icon: {
        path: require('@/assets/svg/sprites/fontawesome.svg'),
        hash: '#envelope',
      }
    }
  }
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
