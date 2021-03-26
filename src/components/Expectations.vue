<template>
  <div class="expectations">
    <List class="expectations__list" :list="expectations"/>
  </div>
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

  .expectations {}

  .expectations__list {
    color: #fff;
  }
</style>
