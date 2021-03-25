<template>
  <section class="skills">
    <h1 class="skills__title">Навыки</h1>
    <Tabs class="skills__tabs">
      <Tab name="HTML" :selected="true">
        <img class="skills__img skills__img_html" src="@/assets/svg/brands/pug.svg" alt="pug">
        <List class="skills__list" :list="skills.html"/>
      </Tab>
      <Tab name="CSS">
        <img class="skills__img skills__img_css" src="@/assets/svg/brands/postcss.svg" alt="postcss">
        <List class="skills__list" :list="skills.css"/>
      </Tab>
      <Tab name="JS">
        <img class="skills__img skills__img_js" src="@/assets/img/yargs.png" alt="yargs">
        <List class="skills__list" :list="skills.js"/>
      </Tab>
      <Tab name="Прочее">
        <img class="skills__img skills__img_other" src="@/assets/svg/brands/webstorm.svg" alt="webstorm">
        <List class="skills__list" :list="skills.other"/>
      </Tab>
    </Tabs>
  </section>
</template>

<script>
  import Tabs from "@/components/Tabs";
  import Tab from "@/components/Tab";
  import List from "@/components/List";

  export default {
    name: "Skills",
    components: {List, Tab, Tabs},
    data() {
      return {
        skills: {
          html: [
            'Семантическая, доступная верстка',
            'БЭМ-нотация',
            'Pug'
          ],
          css: [
            'Адаптивный дизайн (Flexbox, Grid, etc.)',
            'Препроцессоры (Sass, Stylus)',
            'PostCSS',
            'Bootstrap'
          ],
          js: [
            'Ванильный JavaScript (ES5/6)',
            'Vue (CLI, Router, Vuex)',
            'Gulp, Webpack',
            'npm'
          ],
          other: [
            'Git (Flow)',
            'VCS (GitHub, GitLab, Bitbucket)',
            'Языки: PHP, Python, SQL, С#, Prolog, Bash, 1С',
            'ПО: JetBrains IDEs, Adobe (Ps, Ai), Figma'
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

  .skills {}

  .skills__title {
    margin: 0 0 12px 0;
    font-size: $font-size-xl;
    font-weight: 500;
    color: #fff;
  }

  .skills__tabs {
    position: relative;
    overflow: hidden;
  }

  .skills__img {
    display: none;
    position: absolute;
    right: 5%;
    opacity: 0.65;
    &_html {
      bottom: -70px;
      width: 220px;
      transform: rotate(-8deg);
    }
    &_css {
      bottom: -52px;
      width: 190px;
      transform: rotate(15deg);
    }
    &_js {
      right: 0;
      bottom: -150px;
      width: 340px;
      opacity: 0.75;
    }
    &_other {
      bottom: -35px;
      width: 165px;
      opacity: 0.75;
    }
  }

  .skills__list {
    position: relative;
  }

  @media screen and (min-width: 640px) {
    .skills__img {
      display: block;
    }
  }
</style>
