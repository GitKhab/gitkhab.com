<template>
  <section class="cv">
    <h1 class="cv__title">Резюме</h1>
    <p class="cv__positions">
      <template v-for="(item, index) in positions">
        <span class="cv__position" :key="item.position">{{ item.position }}</span>
        <span class="cv__separator" v-if="index < positions.length - 1" :key="item.separator"> / </span>
      </template>
    </p>
  </section>
</template>

<script>
  export default {
    name: "Cv",
    data() {
      return {
        positions: [
          { position: 'html-верстальщик' },
          { position: 'junior frontend-разработчик' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

  .cv {
    color: #fff;
  }

  .cv__title {
    margin: 0;
    font-size: $font-size-xxl;
    font-weight: 500;
  }

  .cv__positions {
    margin: 0;
  }

  .cv__position {}

  .cv__separator {}
</style>
