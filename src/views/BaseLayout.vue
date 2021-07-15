<template>
  <div class="base">
    <div class="base__inner">
      <TheHeader class="base__header"/>
      <router-view class="base__view"/>
    </div>
    <TheFooter class="base__footer"/>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader';
  import TheFooter from '@/components/TheFooter';

  export default {
    name: 'BaseLayout',
    components: {TheFooter, TheHeader}
  }
</script>

<style lang="scss">
  @import "~@/assets/fonts/roboto/roboto.css";

  .html {
    height: 100%;
  }

  .body {
    height: inherit;
    min-width: 320px;
    margin: 0;
    font-family: $fonts-default;
    line-height: 1.4;
    background-color: $main-dark;
  }

  .base {
    display: flex;
    flex-direction: column;
    height: inherit;
  }

  .base__inner {
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
  }

  .base__header {
    flex-shrink: 0;
  }

  .base__view {
    flex-grow: 1;
  }

  .base__footer {
    flex-shrink: 0;
  }
</style>
