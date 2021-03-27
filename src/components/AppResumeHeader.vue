<template>
  <div class="resume">
    <h1 class="resume__title">{{ resume.title }}</h1>
    <p class="resume__positions">
      <BaseTextSeparator :list="resume.positions"/>
    </p>
  </div>
</template>

<script>
  import BaseTextSeparator from "@/components/BaseTextSeparator";

  export default {
    name: "AppResumeHeader",
    components: {BaseTextSeparator},
    data() {
      return {
        resume: {
          title: 'Резюме',
          positions: [
            { id: 1, text: 'html-верстальщик' },
            { id: 2, text: 'junior frontend-разработчик' }
          ]
        }
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
