<template>
  <div class="resume">
    <h1 class="resume__title">Резюме</h1>
    <p class="resume__positions">
      <BaseTextSeparator :list="positionList"/>
    </p>
  </div>
</template>

<script>
  import BaseTextSeparator from "@/components/BaseTextSeparator";

  export default {
    name: "AppResumeHeader",
    components: {BaseTextSeparator},
    computed: {
      positionList() {
        return this.$store.state.resume.positions;
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

  .resume {
    color: #fff;
  }

  .resume__title {
    margin: 0;
    font-size: $font-size-xxl;
    font-weight: 500;
  }

  .resume__positions {
    margin: 0;
  }
</style>
