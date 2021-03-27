<template>
  <ul class="list">
    <li class="list__item"
        v-for="item in list"
        :key="item.id">{{ item.text }}</li>
  </ul>
</template>

<script>
  export default {
    name: "List",
    props: {
      list: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .list {
    margin: 0;
    padding-inline-start: 20px;
  }

  .list__item {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
</style>
