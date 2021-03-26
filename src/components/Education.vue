<template>
  <div class="education">
    <div class="education__group" v-for="item in education" :key="item.label">
      <div class="education__label">{{ item.label }}</div>
      <div class="education__content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Education",
    data() {
      return {
        education: [
          {
            label: 'Год',
            content: '2014-2016 (неполное высшее)'
          },
          {
            label: 'ВУЗ',
            content: 'МГТУ «СТАНКИН»'
          },
          {
            label: 'Институт',
            content: 'информационных систем и технологий'
          },
          {
            label: 'Кафедра',
            content: 'информационных систем'
          },
          {
            label: 'Отделение',
            content: 'очное'
          },
          {
            label: 'Код направления',
            content: '09.03.02'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

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
