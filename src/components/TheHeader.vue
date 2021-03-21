<template>
  <header class="header">
    <div class="header__inner">
      <router-link class="header__link" to="/" title="Главная страница">
        <Logo/>
      </router-link>
    </div>
  </header>
</template>

<script>
  import Logo from "@/components/Logo";

  export default {
    name: "TheHeader",
    components: {Logo}
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/mixins.scss";

  .header {}

  .header__inner {
    @include inner-behavior;
  }

  .header__link {
    @include text-color-transition;
    display: inline-block;
    text-decoration: none;
    color: #fff;
    &:hover {
      color: rgba(#fff, 0.75);
    }
  }
</style>
