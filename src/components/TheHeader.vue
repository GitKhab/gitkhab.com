<template>
  <header class="header">
    <div class="header__inner">
      <router-link class="header__link" to="/" title="Главная страница">
        <TheLogo/>
      </router-link>
    </div>
  </header>
</template>

<script>
  import TheLogo from "@/components/TheLogo";

  export default {
    name: "TheHeader",
    components: {TheLogo}
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/mixins.scss";

  .header {}

  .header__inner {
    @include inner-behavior;
  }

  .header__link {
    @include visual-state-transition;
    @include focus-visible(#fff, 5px);
    display: inline-block;
    text-decoration: none;
    color: #fff;
    &:hover {
      color: rgba(#fff, 0.75);
    }
  }
</style>
