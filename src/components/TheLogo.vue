<template>
  <div class="logo">
    <span class="logo__sld">{{ sld }}</span>
    <span class="logo__tld">.{{ tld }}</span>
  </div>
</template>

<script>
  export default {
    name: "TheLogo",
    computed: {
      sld() {
        return this.$store.state.website.domain.sld;
      },
      tld() {
        return this.$store.state.website.domain.tld;
      }
    }
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
