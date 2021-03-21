<template>
  <main class="home">
    <div class="home__inner">
      <Cv class="home__cv"/>
      <Photo class="home__photo"/>
      <Education class="home__education"/>
      <Subjects class="home__subjects"/>
    </div>
  </main>
</template>

<script>
  import Cv from "@/components/Cv";
  import Photo from "@/components/Photo";
  import Education from "@/components/Education";
  import Subjects from "@/components/Subjects";

  export default {
    name: "Home",
    components: {Subjects, Education, Photo, Cv}
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/sass/variables.scss";
  @import "~@/assets/sass/mixins.scss";

  .home {
    background-image: url(~@/assets/svg/circuit-board.svg);
    background-position: 10px 10px;
    background-color: $main-light;
  }

  .home__inner {
    @include inner-behavior;
    max-width: 420px;
    display: grid;
    grid-template-areas:
        'cv'
        'photo'
        'education'
        'subjects';
    grid-gap: 32px;
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

  .home__subjects {
    grid-area: subjects;
  }

  @media screen and (min-width: 640px) {
    .home__inner {
      max-width: 768px;
      grid-template-areas:
        'cv cv'
        'photo education'
        'subjects subjects';
      grid-template-columns: minmax(310px, 1fr) 1fr;
    }

    .home__education {
      margin-left: auto;
    }
  }
</style>
