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
    name: "Education",
    data() {
      return {
        education: [
          {
            id: 1,
            label: 'Год',
            content: '2014-2016 (неполное высшее)'
          },
          {
            id: 2,
            label: 'ВУЗ',
            content: 'МГТУ «СТАНКИН»'
          },
          {
            id: 3,
            label: 'Институт',
            content: 'информационных систем и технологий'
          },
          {
            id: 4,
            label: 'Кафедра',
            content: 'информационных систем'
          },
          {
            id: 5,
            label: 'Отделение',
            content: 'очное'
          },
          {
            id: 6,
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
