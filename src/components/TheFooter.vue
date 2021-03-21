<template>
  <footer class="footer">
    <div class="footer__inner">*footer*</div>
  </footer>
</template>

<script>
  export default {
    name: "TheFooter"
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/mixins.scss";

  .footer {}

  .footer__inner {
    @include inner-behavior;
  }
</style>
