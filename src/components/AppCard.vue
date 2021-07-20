<template>
  <div class="card" :title="hint">
    <div class="card__body">
      <img class="card__image" :src="imagePath" :alt="imageAlt">
    </div>
    <div class="card__caption" v-if="title">{{ title }}</div>
  </div>
</template>

<script>
  export default {
    name: 'AppCard',
    props: {
      hint: String,
      title: String,
      imagePath: {
        type: String,
        required: true
      },
      imageAlt: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .card {}

  .card:hover .card__image {
    transform: scale(1.2);
  }

  .card__body {
    @include square-ratio;
    display: flex;
    background-color: $gray-light;
    border-radius: 12px;
  }

  .card__image {
    width: 50%;
    margin: auto;
    transition: transform 0.3s;
    user-select: none;
  }

  .card__caption {
    width: 120px;
    margin: 6px auto 0 auto;
    font-size: $font-size-s;
    text-align: center;
  }
</style>
