<template>
  <p class="positions">
    <BaseTextSeparator :list="resumePositions"/>
  </p>
</template>

<script>
  import BaseTextSeparator from "@/components/BaseTextSeparator";

  export default {
    name: "AppResumePositions",
    components: {BaseTextSeparator},
    computed: {
      resumePositions() {
        return this.$store.state.resume.positions;
      }
    }
  }
</script>

<style lang="scss">
  .positions {
    margin: 0;
  }
</style>
