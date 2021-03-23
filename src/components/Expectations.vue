<template>
  <section class="expectations">
    <h1 class="expectations__title">Ожидания</h1>
    <List :list="expectations"/>
  </section>
</template>

<script>
  import List from "@/components/List";

  export default {
    name: "Expectations",
    components: {List},
    data() {
      return {
        expectations: [
          'Оформление: ТК РФ, заработная плата от 50 000 ₽ (на руки) с возможностью дальнейшего карьерного роста',
          'Работа в команде опытных разработчиков',
          'Офис в Москве / работа из дома',
          'Гибкий график будет плюсом'
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

  .expectations {
    color: #fff;
  }

  .expectations__title {
    margin: 0 0 12px 0;
    font-size: $font-size-xl;
    font-weight: 500;
  }
</style>