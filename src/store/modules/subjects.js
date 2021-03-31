const state = () => ([
  {
    id: 1,
    title: 'Информатика',
    image: {
      path: require('@/assets/svg/subjects/binary-code.svg'),
      alt: 'binary-code'
    }
  },
  {
    id: 2,
    title: 'Структурное программ.',
    hint: 'Структурное программирование',
    image: {
      path: require('@/assets/svg/subjects/flowchart.svg'),
      alt: 'flowchart'
    }
  },
  {
    id: 3,
    title: 'Математический анализ',
    image: {
      path: require('@/assets/svg/subjects/sum.svg'),
      alt: 'sum'
    }
  },
  {
    id: 4,
    title: 'Операционные системы',
    image: {
      path: require('@/assets/svg/subjects/linux.svg'),
      alt: 'linux'
    }
  },
  {
    id: 5,
    title: 'Архитектура ЭВМ и ВС',
    hint: 'Архитектура электронно-вычислительных машин и вычислительных систем',
    image: {
      path: require('@/assets/svg/subjects/cpu.svg'),
      alt: 'cpu'
    }
  },
  {
    id: 6,
    title: 'Дискретная математика',
    image: {
      path: require('@/assets/svg/subjects/graph.svg'),
      alt: 'graph'
    }
  },
  {
    id: 7,
    title: 'Теория вероятности',
    image: {
      path: require('@/assets/svg/subjects/dices.svg'),
      alt: 'dices'
    }
  },
  {
    id: 8,
    title: 'Управление данными',
    image: {
      path: require('@/assets/svg/subjects/data.svg'),
      alt: 'data'
    }
  },
  {
    id: 9,
    title: 'Интеллект. и эксперт. системы',
    hint: 'Интеллектуальные и экспертные системы',
    image: {
      path: require('@/assets/svg/subjects/brain.svg'),
      alt: 'brain'
    }
  },
  {
    id: 10,
    title: 'И прочее',
    hint: 'Прочее',
    image: {
      path: require('@/assets/svg/subjects/etc.svg'),
      alt: 'etc'
    }
  }
])

export default {
  state
}
