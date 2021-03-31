<template>
  <div class="tabs">
    <div class="tabs__header">
      <button class="tabs__tab"
              v-for="tab in tabs"
              :key="tab.name"
              @click="selectTab(tab)"
              :class="{ 'tabs__tab_active': tab.isActive }">{{ tab.name }}</button>
    </div>
    <div class="tabs__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppTabs',
    data() {
      return {
        tabs: []
      }
    },
    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.name === selectedTab.name);
        });
      }
    },
    created() {
      this.tabs = this.$children;
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";
  @import "~@/assets/sass/mixins.scss";

  $tabs-border-radius: 8px;

  .tabs {}

  .tabs__header {
    padding: 0 8px;
    border-top-left-radius: $tabs-border-radius;
    border-top-right-radius: $tabs-border-radius;
    background-color: $gray-light;
  }

  .tabs__tab {
    @include focus-visible($gray-dark, -5px);
    padding: 16px 8px;
    font-family: $fonts-default;
    font-size: $font-size-m;
    font-weight: 700;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: rgba(#000, 0.3);
    &:hover {
      color: $gray-dark;
    }
    &_active {
      color: $gray-dark;
    }
  }

  .tabs__body {
    padding: 20px;
    border-bottom-right-radius: $tabs-border-radius;
    border-bottom-left-radius: $tabs-border-radius;
    background-color: #fff;
    color: $black-light;
  }
</style>
