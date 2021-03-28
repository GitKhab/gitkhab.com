<template>
  <p class="positions">
    <BaseTextSeparator :list="positions"/>
  </p>
</template>

<script>
  import BaseTextSeparator from "@/components/BaseTextSeparator";

  export default {
    name: "AppResumePositions",
    components: {BaseTextSeparator},
    data() {
      return {
        positions: [
          { id: 1, text: 'html-верстальщик' },
          { id: 2, text: 'junior frontend-разработчик' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .positions {
    margin: 0;
  }
</style>
