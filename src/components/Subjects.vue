<template>
  <div class="subjects">
    <Card class="subjects__card" v-for="item in subjects"
          :key="item.title"
          :title="item.title"
          :hint="item.hint ? item.hint : item.title"
          :image-path="require(`../assets/svg/subjects/${item.imageName}.svg`)"
          :image-alt="item.imageName"/>
  </div>
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
            imageName: 'binary-code'
          },
          {
            title: 'Структурное программ.',
            hint: 'Структурное программирование',
            imageName: 'flowchart'
          },
          {
            title: 'Математический анализ',
            imageName: 'sum'
          },
          {
            title: 'Операционные системы',
            imageName: 'linux'
          },
          {
            title: 'Архитектура ЭВМ и ВС',
            hint: 'Архитектура электронно-вычислительных машин и вычислительных систем',
            imageName: 'cpu'
          },
          {
            title: 'Дискретная математика',
            imageName: 'graph'
          },
          {
            title: 'Теория вероятности',
            imageName: 'dices'
          },
          {
            title: 'Управление данными',
            imageName: 'data'
          },
          {
            title: 'Интеллект. и эксперт. системы',
            hint: 'Интеллектуальные и экспертные системы',
            imageName: 'brain'
          },
          {
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
    cursor: help;
  }
</style>
