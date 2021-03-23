<template>
  <section class="skills">
    <h1 class="skills__title">Навыки</h1>
    <Tabs>
      <Tab name="HTML" :selected="true">
        <ul class="skills__list">
          <li class="skills__list-item">Семантическая, доступная верстка</li>
          <li class="skills__list-item">БЭМ-нотация</li>
          <li class="skills__list-item">Pug</li>
        </ul>
      </Tab>
      <Tab name="CSS">
        <ul class="skills__list">
          <li class="skills__list-item">Адаптивный дизайн (Flexbox, Grid, Media queries, etc.)</li>
          <li class="skills__list-item">Препроцессоры (Sass, Stylus)</li>
          <li class="skills__list-item">PostCSS</li>
          <li class="skills__list-item">Bootstrap</li>
        </ul>
      </Tab>
      <Tab name="JS">
        <ul class="skills__list">
          <li class="skills__list-item">Ванильный JavaScript (ES5/6)</li>
          <li class="skills__list-item">Vue (CLI, Router, Vuex)</li>
          <li class="skills__list-item">Gulp (ленивые таски, инкрементальная сборка)</li>
          <li class="skills__list-item">npm</li>
        </ul>
      </Tab>
      <Tab name="Прочее">
        <ul class="skills__list">
          <li class="skills__list-item">Git (Flow)</li>
          <li class="skills__list-item">VCS (GitHub, GitLab, Bitbucket)</li>
          <li class="skills__list-item">Опыт работы с языками программирования: PHP, SQL, Python, С#, Prolog, Bash, 1С</li>
          <li class="skills__list-item">Опыт работы с программным обеспечением: JetBrains IDE (WebStorm, PhpStorm, etc.), Adobe (Photoshop, Illustrator), Figma, ftp-клиенты</li>
        </ul>
      </Tab>
    </Tabs>
  </section>
</template>

<script>
  import Tabs from "@/components/Tabs";
  import Tab from "@/components/Tab";

  export default {
    name: "Skills",
    components: {Tab, Tabs},
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

  .skills__list {
    margin: 0;
    padding-inline-start: 20px;
  }

  .skills__list-item {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
</style>
