<template>
  <footer class="footer">
    <div class="footer__inner">
      <Contacts/>
    </div>
  </footer>
</template>

<script>
  import Contacts from "@/components/Contacts";
  export default {
    name: "TheFooter",
    components: {Contacts}
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/mixins.scss";

  .footer {}

  .footer__inner {
    @include inner-behavior;
  }
</style>
