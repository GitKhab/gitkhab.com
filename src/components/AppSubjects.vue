<template>
  <div class="subjects">
    <AppCard class="subjects__card"
          v-for="item in subjects"
          :key="item.id"
          :title="item.title"
          :hint="item.hint ? item.hint : item.title"
          :image-path="require(`@/assets/svg/subjects/${item.imageName}.svg`)"
          :image-alt="item.imageName"/>
  </div>
</template>

<script>
  import AppCard from "@/components/AppCard";

  export default {
    name: "AppSubjects",
    components: {AppCard},
    computed: {
      subjects() {
        return this.$store.state.subjects;
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

  .subjects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    grid-gap: 16px;
  }

  .subjects__card {
    color: #fff;
  }
</style>
