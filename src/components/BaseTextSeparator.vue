<template>
  <span>
    <template v-for="(item, index) in list">
      <span :key="item.id + 'text'">{{ item.text }}</span>
      <span v-if="index < list.length - 1" :key="item.id + 'separator'">{{ separator }}</span>
    </template>
  </span>
</template>

<script>
  export default {
    name: "BaseTextSeparator",
    props: {
      list: {
        type: Array,
        required: true
      },
      separator: {
        type: String,
        default: ' / '
      }
    }
  }
</script>
