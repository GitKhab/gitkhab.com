<template>
  <main class="home">
    <div class="home__inner">
      <Cv class="home__cv"/>
      <Photo class="home__photo"/>
      <Education class="home__education"/>
    </div>
  </main>
</template>

<script>
  import Cv from "@/components/Cv";
  import Photo from "@/components/Photo";
  import Education from "@/components/Education";

  export default {
    name: "Home",
    components: {Education, Photo, Cv}
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
    display: grid;
    grid-template-areas:
        'cv'
        'photo'
        'education';
    grid-gap: 32px;
    max-width: 768px;
    margin: 0 auto;
    padding: 20px 16px;
  }

  .home__cv {
    grid-area: cv;
  }

  .home__photo {
    grid-area: photo;
  }

  .home__education {
    grid-area: education;
  }

  @media screen and (min-width: 640px) {
    .home__inner {
      grid-template-areas:
        'cv cv'
        'photo education';
      grid-template-columns: minmax(auto, 335px) 1fr;
    }
  }
</style>
