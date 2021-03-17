<template>
  <header class="header">
    <div class="header__inner">*header*</div>
  </header>
</template>

<script>
  export default {
    name: "TheHeader"
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

  .header {}

  .header__inner {
    max-width: $inner-max-width;
    margin: 0 auto;
  }
</style>
