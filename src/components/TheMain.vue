<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
  export default {
    name: "TheMain"
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

  .main {
    background-color: $main-light;
    background-image: url(~@/assets/svg/circuit-board.svg);
    background-position: 10px 10px;
  }
</style>
