<template>
  <div class="tabs">
    <div class="tabs__header">
      <button class="tabs__tab"
              v-for="tab in tabs"
              :key="tab.name"
              @click="selectTab(tab)">{{ tab.name }}</button>
    </div>
    <div class="tabs__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tabs",
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
