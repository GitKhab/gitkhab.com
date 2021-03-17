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
  @import "~@/assets/sass/variables.scss";

  .footer {}

  .footer__inner {
    max-width: $inner-max-width;
    margin: 0 auto;
  }
</style>
