<template>
  <section class="skills">
    <h1 class="skills__title">Навыки</h1>
    <Tabs>
      <Tab name="HTML" :selected="true">
        <List :list="skills.html"/>
      </Tab>
      <Tab name="CSS">
        <List :list="skills.css"/>
      </Tab>
      <Tab name="JS">
        <List :list="skills.js"/>
      </Tab>
      <Tab name="Прочее">
        <List :list="skills.other"/>
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
            'Адаптивный дизайн (Flexbox, Grid, Media queries, etc.)',
            'Препроцессоры (Sass, Stylus)',
            'PostCSS',
            'Bootstrap'
          ],
          js: [
            'Ванильный JavaScript (ES5/6)',
            'Vue (CLI, Router, Vuex)',
            'Gulp (ленивые таски, инкрементальная сборка)',
            'npm'
          ],
          other: [
            'Git (Flow)',
            'VCS (GitHub, GitLab, Bitbucket)',
            'Опыт работы с языками программирования: PHP, SQL, Python, С#, Prolog, Bash, 1С',
            'Опыт работы с программным обеспечением: JetBrains IDE (WebStorm, PhpStorm, etc.), Adobe (Photoshop, Illustrator), Figma, ftp-клиенты'
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
</style>
