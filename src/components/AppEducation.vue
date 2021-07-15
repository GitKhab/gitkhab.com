<template>
  <div class="education">
    <div class="education__group" v-for="item in education" :key="item.id">
      <div class="education__label">{{ item.label }}</div>
      <div class="education__content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppEducation',
    computed: {
      education() {
        return this.$store.state.education;
      }
    }
  }
</script>

<style lang="scss">
  .education {}

  .education__group {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  .education__label {
    font-size: $font-size-s;
    font-weight: 500;
    color: #b4b5bc;
  }

  .education__content {
    color: #fff;
  }
</style>
