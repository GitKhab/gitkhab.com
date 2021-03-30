const state = () => ({
  html: [
    { id: 1, text: 'Семантическая, доступная верстка' },
    { id: 2, text: 'БЭМ-нотация' },
    { id: 3, text: 'Pug' }
  ],
  css: [
    { id: 1, text: 'Адаптивный дизайн (Flexbox, Grid, etc.)' },
    { id: 2, text: 'Препроцессоры (Sass, Stylus)' },
    { id: 3, text: 'PostCSS' },
    { id: 4, text: 'Bootstrap' }
  ],
  js: [
    { id: 1, text: 'Ванильный JavaScript (ES5/6)' },
    { id: 2, text: 'Vue (CLI, Router, Vuex)' },
    { id: 3, text: 'Gulp, Webpack' },
    { id: 4, text: 'npm' }
  ],
  other: [
    { id: 1, text: 'Git (Flow)' },
    { id: 2, text: 'VCS (GitHub, GitLab, Bitbucket)' },
    { id: 3, text: 'Языки: PHP, Python, SQL, С#, Prolog, Bash, 1С' },
    { id: 4, text: 'ПО: JetBrains IDEs, Adobe (Ps, Ai), Figma' }
  ]
})

export default {
  state
}
