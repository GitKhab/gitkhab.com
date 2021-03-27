<template>
  <div class="expectations">
    <AppList class="expectations__list" :list="expectations"/>
  </div>
</template>

<script>
  import AppList from "@/components/AppList";

  export default {
    name: "Expectations",
    components: {AppList},
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
