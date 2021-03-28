<template>
  <div class="error">
    <div class="error__inner">
      <div class="error__status">404</div>
      <div class="error__description">Страница не найдена</div>
      <router-link class="error__link" to="/">Перейти на главную</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NotFound"
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/sass/variables.scss";
  @import "~@/assets/sass/mixins.scss";

  .error {
    display: flex;
    height: inherit;
    text-align: center;
    color: $gray-light;
  }

  .error__inner {
    margin: auto;
    padding: 20px;
  }

  .error__status {
    font-size: 120px;
    font-weight: 700;
    line-height: 0.75;
    margin-bottom: 12px;
  }

  .error__description {
    font-size: $font-size-m;
    font-weight: 500;
    margin-bottom: 18px;
  }

  .error__link {
    @include visual-state-transition;
    @include focus-visible($gray-light, 5px);
    display: inline-block;
    padding: 12px;
    border: 2px solid $gray-light;
    font-size: $font-size-s;
    border-radius: 25px;
    color: inherit;
    text-decoration: none;
    &:hover {
      background-color: $gray-light;
      color: $black-light;
    }
  }
</style>
