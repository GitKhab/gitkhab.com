<template>
  <AppTabs class="skills">
    <AppTabsTab name="HTML" :selected="true">
      <AppList class="skills__list" :list="skills.html"/>
      <img class="skills__img skills__img_html" src="@/assets/svg/brands/pug.svg" alt="pug">
    </AppTabsTab>
    <AppTabsTab name="CSS">
      <AppList class="skills__list" :list="skills.css"/>
      <img class="skills__img skills__img_css" src="@/assets/svg/brands/postcss.svg" alt="postcss">
    </AppTabsTab>
    <AppTabsTab name="JS">
      <AppList class="skills__list" :list="skills.js"/>
      <img class="skills__img skills__img_js" src="@/assets/img/yargs.png" alt="yargs">
    </AppTabsTab>
    <AppTabsTab name="Прочее">
      <AppList class="skills__list" :list="skills.other"/>
      <img class="skills__img skills__img_other" src="@/assets/svg/brands/webstorm.svg" alt="webstorm">
    </AppTabsTab>
  </AppTabs>
</template>

<script>
  import AppTabs from "@/components/AppTabs";
  import AppTabsTab from "@/components/AppTabsTab";
  import AppList from "@/components/AppList";

  export default {
    name: "Skills",
    components: {AppList, AppTabsTab, AppTabs},
    computed: {
      skills() {
        return this.$store.state.skills;
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
    user-select: none;
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
