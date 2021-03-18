<template>
  <main class="home">
    <div class="home__inner">
      <Cv/>
    </div>
  </main>
</template>

<script>
  import Cv from "@/components/Cv";
  export default {
    name: "Home",
    components: {Cv}
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/sass/variables.scss";

  .home {
    background-image: url(~@/assets/svg/circuit-board.svg);
    background-position: 10px 10px;
    background-color: $main-light;
  }

  .home__inner {
    max-width: 768px;
    margin: 0 auto;
    padding: 20px 16px;
  }
</style>
