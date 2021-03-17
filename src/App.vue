<template>
  <div id="app">
    <div class="app__inner">
      <TheHeader class="app__header"/>
      <router-view class="app__main"/>
    </div>
    <TheFooter class="app__footer"/>
  </div>
</template>
<script>
  import TheHeader from "@/components/TheHeader";
  import TheFooter from "@/components/TheFooter";
  export default {
    components: {TheFooter, TheHeader}
  }
</script>

<style lang="scss">
  @import "~@/assets/fonts/roboto/roboto.css";
  @import "~@/assets/sass/variables.scss";

  html {
    height: 100%;
  }

  body {
    height: inherit;
    min-width: 320px;
    margin: 0;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    line-height: 1.15;
    background-color: $main-dark;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: inherit;
  }

  .app__inner {
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
  }

  .app__header {
    flex-shrink: 0;
  }

  .app__main {
    flex-grow: 1;
  }

  .app__footer {
    flex-shrink: 0;
  }
</style>
