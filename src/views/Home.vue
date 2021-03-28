<template>
  <main class="home">
    <div class="home__inner">
      <ThePageHeading class="home__title" text="Резюме">
        <AppResumePositions/>
      </ThePageHeading>
      <AppSection class="home__photo" title="Фото">
        <AppPhoto/>
      </AppSection>
      <AppSection class="home__education" title="Образование">
        <AppEducation/>
      </AppSection>
      <AppSection class="home__subjects" title="Изучил за время обучения">
        <AppSubjects/>
      </AppSection>
      <AppSection class="home__skills" title="Навыки">
        <AppSkills/>
      </AppSection>
      <AppSection class="home__expectations" title="Ожидания">
        <AppExpectations/>
      </AppSection>
    </div>
  </main>
</template>

<script>
  import ThePageHeading from "@/components/ThePageHeading";
  import AppPhoto from "@/components/AppPhoto";
  import AppEducation from "@/components/AppEducation";
  import AppSubjects from "@/components/AppSubjects";
  import AppSkills from "@/components/AppSkills";
  import AppExpectations from "@/components/AppExpectations";
  import AppSection from "@/components/AppSection";
  import AppResumePositions from "@/components/AppResumePositions";

  export default {
    name: "Home",
    components: {
      AppResumePositions,
      AppSection,
      AppExpectations,
      AppSkills,
      AppSubjects,
      AppEducation,
      AppPhoto,
      ThePageHeading
    }
  }
</script>

<style lang="scss">
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
    padding-top: 32px;
    padding-bottom: 48px;
    display: grid;
    grid-template-areas:
        'title'
        'photo'
        'education'
        'subjects'
        'skills'
        'expectations';
    grid-gap: 32px;
  }

  .home__title {
    grid-area: title;
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

  .home__skills {
    grid-area: skills;
  }

  .home__expectations {
    grid-area: expectations;
  }

  @media screen and (min-width: 640px) {
    .home__inner {
      max-width: 768px;
      grid-template-areas:
        'title title'
        'photo education'
        'subjects subjects'
        'skills skills'
        'expectations expectations';
      grid-template-columns: minmax(310px, 1fr) 1fr;
    }

    .home__education {
      margin-left: auto;
    }
  }
</style>
