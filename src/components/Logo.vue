<template>
  <div class="logo">
    <span class="logo__sld">GitKhab</span>
    <span class="logo__tld">.com</span>
  </div>
</template>

<script>
  export default {
    name: "Logo"
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

  .logo {}

  .logo__sld {
    font-size: $font-size-xxl;
    font-weight: 500;
  }

  .logo__tld {
    font-size: $font-size-default;
  }
</style>
