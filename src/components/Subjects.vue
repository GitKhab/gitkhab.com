<template>
  <section class="subjects">
    <h1 class="subjects__title">Изучил за время обучения</h1>
    <div class="subjects__cards">
      <Card class="subjects__card" v-for="item in subjects"
            :key="item.title"
            :title="item.title"
            :hint="item.hint ? item.hint : item.title"
            :image-path="require(`../assets/svg/subjects/${item.imgName}.svg`)"
            :image-alt="item.imgName"/>
    </div>
  </section>
</template>

<script>
  import Card from "@/components/Card";

  export default {
    name: "Subjects",
    components: {Card},
    data() {
      return {
        subjects: [
          {
            title: 'Информатика',
            imgName: 'binary-code'
          },
          {
            title: 'Структурное программ.',
            hint: 'Структурное программирование',
            imgName: 'flowchart'
          },
          {
            title: 'Математический анализ',
            imgName: 'sum'
          },
          {
            title: 'Операционные системы',
            imgName: 'linux'
          },
          {
            title: 'Архитектура ЭВМ и ВС',
            hint: 'Архитектура электронно-вычислительных машин и вычислительных систем',
            imgName: 'cpu'
          },
          {
            title: 'Дискретная математика',
            imgName: 'graph'
          },
          {
            title: 'Теория вероятности',
            imgName: 'dices'
          },
          {
            title: 'Управление данными',
            imgName: 'data'
          },
          {
            title: 'Интеллект. и эксперт. системы',
            hint: 'Интеллектуальные и экспертные системы',
            imgName: 'brain'
          },
          {
            title: 'И прочее',
            hint: 'Прочее',
            imgName: 'etc'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

  .subjects {
    color: #fff;
  }

  .subjects__title {
    margin: 0 0 12px 0;
    font-size: $font-size-xl;
    font-weight: 500;
  }

  .subjects__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    grid-gap: 16px;
  }

  .subjects__card {
    cursor: help;
  }
</style>
