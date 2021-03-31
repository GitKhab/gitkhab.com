<template>
  <div class="expectations">
    <AppList class="expectations__list" :list="expectations"/>
  </div>
</template>

<script>
  import AppList from '@/components/AppList';

  export default {
    name: 'AppExpectations',
    components: {AppList},
    computed: {
      expectations() {
        return this.$store.state.expectations;
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

  .expectations {}

  .expectations__list {
    color: #fff;
  }
</style>
