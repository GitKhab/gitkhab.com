<template>
  <div class="photo">
    <div class="photo__item">
      <img class="photo__image photo__image_front" src="@/assets/img/photo.jpg" alt="Фотография">
    </div>
    <div class="photo__item">
      <div class="photo__image photo__image_back"></div>
      <div class="photo__caption">{{ personFullName }}, {{ personAge }} {{ pluralizeYear(personAge) }}</div>
    </div>
  </div>
</template>

<script>
  import pluralizeNoun from "@/assets/js/pluralizeNoun";

  export default {
    name: "AppPhoto",
    computed: {
      personFullName() {
        return this.$store.getters.getPersonFullName;
      },
      personAge() {
        return this.$store.getters.getPersonAge;
      }
    },
    methods: {
      pluralizeYear(years) {
        return pluralizeNoun(years, 'год', 'года', 'лет');
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";
  @import "~@/assets/sass/mixins.scss";

  .photo {
    @include square-ratio;
  }

  .photo__item {
    @include square-ratio;
    position: absolute;
    width: calc(100% - 28px);
    &:first-child {
      z-index: 500;
      top: 0;
      left: 0;
    }
    &:last-child {
      z-index: 450;
      top: 28px;
      left: 28px;
    }
  }

  .photo__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    user-select: none;
    &_front {
      background-color: $main-dark;
      box-shadow: 10px 10px 10px -12px $main-dark;
    }
    &_back {
      background-color: $gray-light;
    }
  }

  .photo__caption {
    position: absolute;
    right: 12px;
    bottom: 4px;
    font-size: $font-size-s;
    font-weight: 500;
    color: $gray-dark;
  }
</style>
