<template>
  <section class="education">
    <h1 class="education__title">Образование</h1>
    <div class="education__group" v-for="item in education" :key="item.label">
      <div class="education__label">{{ item.label }}</div>
      <div class="education__content">{{ item.content }}</div>
    </div>
  </section>
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

  .education__title {
    margin: 0 0 12px 0;
    font-size: $font-size-xxl;
    font-weight: 500;
    color: #fff;
  }

  .education__group {
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }

  .education__label {
    font-size: $font-size-s;
    font-weight: 500;
    color: rgba(#fff, 0.65);
  }

  .education__content {
    color: #fff;
  }
</style>
