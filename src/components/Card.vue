<template>
  <div class="card" :title="hint">
    <div class="card__body">
      <img class="card__image" :src="imagePath" :alt="imageAlt">
    </div>
    <div class="card__caption">{{ title }}</div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      hint: String,
      imagePath: String,
      imageAlt: String,
      title: String,
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";
  @import "~@/assets/sass/mixins.scss";

  .card {}

  .card:hover .card__image {
    transform: scale(1.2);
  }

  .card__body {
    @include square-ratio;
    background-color: $gray-light;
    display: flex;
    border-radius: 12px;
  }

  .card__image {
    margin: auto;
    width: 50%;
    transition: transform 0.3s;
  }

  .card__caption {
    margin: 6px auto 0 auto;
    width: 120px;
    font-size: $font-size-s;
    text-align: center;
  }
</style>
