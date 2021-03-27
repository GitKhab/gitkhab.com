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
    data() {
      return {
        subjects: [
          {
            id: 1,
            title: 'Информатика',
            imageName: 'binary-code'
          },
          {
            id: 2,
            title: 'Структурное программ.',
            hint: 'Структурное программирование',
            imageName: 'flowchart'
          },
          {
            id: 3,
            title: 'Математический анализ',
            imageName: 'sum'
          },
          {
            id: 4,
            title: 'Операционные системы',
            imageName: 'linux'
          },
          {
            id: 5,
            title: 'Архитектура ЭВМ и ВС',
            hint: 'Архитектура электронно-вычислительных машин и вычислительных систем',
            imageName: 'cpu'
          },
          {
            id: 6,
            title: 'Дискретная математика',
            imageName: 'graph'
          },
          {
            id: 7,
            title: 'Теория вероятности',
            imageName: 'dices'
          },
          {
            id: 8,
            title: 'Управление данными',
            imageName: 'data'
          },
          {
            id: 9,
            title: 'Интеллект. и эксперт. системы',
            hint: 'Интеллектуальные и экспертные системы',
            imageName: 'brain'
          },
          {
            id: 10,
            title: 'И прочее',
            hint: 'Прочее',
            imageName: 'etc'
          }
        ]
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
