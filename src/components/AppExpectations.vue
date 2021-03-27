<template>
  <div class="expectations">
    <AppList class="expectations__list" :list="expectations"/>
  </div>
</template>

<script>
  import AppList from "@/components/AppList";

  export default {
    name: "AppExpectations",
    components: {AppList},
    data() {
      return {
        expectations: [
          { id: 1, text: 'Оформление: ТК РФ, заработная плата от 50 000 ₽ (на руки) с возможностью дальнейшего карьерного роста' },
          { id: 2, text: 'Работа в команде опытных разработчиков' },
          { id: 3, text: 'Офис в Москве / работа из дома' },
          { id: 4, text: 'Гибкий график будет плюсом' }
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
