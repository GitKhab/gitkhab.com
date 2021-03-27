<template>
  <footer class="footer">
    <div class="footer__inner">
      <AppContacts/>
    </div>
  </footer>
</template>

<script>
  import AppContacts from "@/components/AppContacts";
  export default {
    name: "TheFooter",
    components: {AppContacts}
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/mixins.scss";

  .footer {}

  .footer__inner {
    @include inner-behavior;
  }
</style>
