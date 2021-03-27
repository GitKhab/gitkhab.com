<template>
  <main class="home">
    <div class="home__inner">
      <AppResumeHeader class="home__resume"/>
      <Section class="home__photo" title="Фото">
        <AppPhoto/>
      </Section>
      <Section class="home__education" title="Образование">
        <Education/>
      </Section>
      <Section class="home__subjects" title="Изучил за время обучения">
        <Subjects/>
      </Section>
      <Section class="home__skills" title="Навыки">
        <Skills/>
      </Section>
      <Section class="home__expectations" title="Ожидания">
        <Expectations/>
      </Section>
    </div>
  </main>
</template>

<script>
  import AppResumeHeader from "@/components/AppResumeHeader";
  import AppPhoto from "@/components/AppPhoto";
  import Education from "@/components/Education";
  import Subjects from "@/components/Subjects";
  import Skills from "@/components/Skills";
  import Expectations from "@/components/Expectations";
  import Section from "@/components/Section";

  export default {
    name: "Home",
    components: {Section, Expectations, Skills, Subjects, Education, AppPhoto, AppResumeHeader}
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
    padding-bottom: 32px;
    display: grid;
    grid-template-areas:
        'resume'
        'photo'
        'education'
        'subjects'
        'skills'
        'expectations';
    grid-gap: 32px;
  }

  .home__resume {
    grid-area: resume;
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
        'resume resume'
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
