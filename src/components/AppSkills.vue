<template>
  <Tabs class="skills">
    <TabsTab name="HTML" :selected="true">
      <AppList class="skills__list" :list="skills.html"/>
      <img class="skills__img skills__img_html" src="@/assets/svg/brands/pug.svg" alt="pug">
    </TabsTab>
    <TabsTab name="CSS">
      <AppList class="skills__list" :list="skills.css"/>
      <img class="skills__img skills__img_css" src="@/assets/svg/brands/postcss.svg" alt="postcss">
    </TabsTab>
    <TabsTab name="JS">
      <AppList class="skills__list" :list="skills.js"/>
      <img class="skills__img skills__img_js" src="@/assets/img/yargs.png" alt="yargs">
    </TabsTab>
    <TabsTab name="Прочее">
      <AppList class="skills__list" :list="skills.other"/>
      <img class="skills__img skills__img_other" src="@/assets/svg/brands/webstorm.svg" alt="webstorm">
    </TabsTab>
  </Tabs>
</template>

<script>
  import Tabs from "@/components/Tabs";
  import TabsTab from "@/components/TabsTab";
  import AppList from "@/components/AppList";

  export default {
    name: "Skills",
    components: {AppList, TabsTab, Tabs},
    data() {
      return {
        skills: {
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
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

  .skills {
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
