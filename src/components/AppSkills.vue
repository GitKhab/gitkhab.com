<template>
  <AppTabs class="skills">
    <AppTabsTab v-for="item in skills" :key="item.id" :name="item.name" :selected="item.id === 1">
      <AppList class="skills__list" :list="item.list"/>
      <img class="skills__img" :class="addImageModifier(item)" :src="item.image.path" :alt="item.image.alt">
    </AppTabsTab>
  </AppTabs>
</template>

<script>
  import AppTabs from '@/components/AppTabs';
  import AppTabsTab from '@/components/AppTabsTab';
  import AppList from '@/components/AppList';

  export default {
    name: 'Skills',
    components: {AppList, AppTabsTab, AppTabs},
    computed: {
      skills() {
        return this.$store.state.skills;
      }
    },
    methods: {
      addImageModifier(skills) {
        let classname = '';
        switch (skills.name) {
          case 'HTML':
            classname = 'skills__img_html';
            break;
          case 'CSS':
            classname = 'skills__img_css';
            break;
          case 'JS':
            classname = 'skills__img_js';
            break;
          case 'Прочее':
            classname = 'skills__img_other';
            break;
        }
        return classname;
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
