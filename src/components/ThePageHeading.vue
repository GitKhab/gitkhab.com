<template>
  <div class="heading">
    <h1 class="heading__text">{{ text }}</h1>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ThePageHeading',
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .heading {
    color: #fff;
  }

  .heading__text {
    margin: 0;
    font-size: $font-size-xxl;
    line-height: 1.2;
    font-weight: 500;
  }
</style>
