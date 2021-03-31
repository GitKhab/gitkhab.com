const state = () => ([
  {
    id: 1,
    name: 'HTML',
    list: [
      { id: 1, text: 'Семантическая, доступная верстка' },
      { id: 2, text: 'БЭМ-нотация' },
      { id: 3, text: 'Pug' }
    ],
    image: {
      path: require('@/assets/svg/brands/pug.svg'),
      alt: 'pug'
    }
  },
  {
    id: 2,
    name: 'CSS',
    list: [
      { id: 1, text: 'Адаптивный дизайн (Flexbox, Grid, etc.)' },
      { id: 2, text: 'Препроцессоры (Sass, Stylus)' },
      { id: 3, text: 'PostCSS' },
      { id: 4, text: 'Bootstrap' }
    ],
    image: {
      path: require('@/assets/svg/brands/postcss.svg'),
      alt: 'postcss'
    }
  },
  {
    id: 3,
    name: 'JS',
    list: [
      { id: 1, text: 'Ванильный JavaScript (ES5/6)' },
      { id: 2, text: 'Vue (CLI, Router, Vuex)' },
      { id: 3, text: 'Gulp, Webpack' },
      { id: 4, text: 'npm' }
    ],
    image: {
      path: require('@/assets/img/yargs.png'),
      alt: 'yargs'
    }
  },
  {
    id: 4,
    name: 'Прочее',
    list: [
      { id: 1, text: 'Git (Flow)' },
      { id: 2, text: 'VCS (GitHub, GitLab, Bitbucket)' },
      { id: 3, text: 'Языки: PHP, Python, SQL, С#, Prolog, Bash, 1С' },
      { id: 4, text: 'ПО: JetBrains IDEs, Adobe (Ps, Ai), Figma' }
    ],
    image: {
      path: require('@/assets/svg/brands/webstorm.svg'),
      alt: 'webstorm'
    }
  }
])

export default {
  state
}
