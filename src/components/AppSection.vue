<template>
  <section class="section">
    <h1 class="section__title">{{ title }}</h1>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: "AppSection",
    props: {
      title: String
    }
  }
</script>

<style lang="scss">
  @import '~@/assets/sass/variables.scss';

  .section {}

  .section__title {
    margin: 0 0 12px 0;
    font-size: $font-size-xl;
    font-weight: 500;
    color: #fff;
  }
</style>