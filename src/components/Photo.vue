<template>
  <div class="photo">
    <h2 class="photo__title">Фото</h2>
    <div class="photo__inner">
      <div class="photo__item">
        <img class="photo__image photo__image_front" src="../assets/img/photo.jpg" alt="Фотография">
      </div>
      <div class="photo__item">
        <div class="photo__image photo__image_back"></div>
        <div class="photo__caption">{{ personFullName }}, {{ getPersonAge() }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getAge} from "@/assets/js/getAge";

  export default {
    name: "Photo",
    computed: {
      personFullName () {
        return (this.$store.state.person.lastName + ' ' + this.$store.state.person.firstName);
      }
    },
    methods: {
      getPersonAge: function () {
        return getAge(this.$store.state.person.birthday);
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";
  @import "~@/assets/sass/mixins.scss";

  .photo {
    color: #fff;
  }

  .photo__title {
    margin: 0 0 12px 0;
    font-size: $font-size-xl;
    font-weight: 500;
  }

  .photo__inner {
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
    border-radius: 1.8vmax;
    &_front {
      background-color: $main-dark;
      box-shadow: 10px 10px 10px -12px $main-dark;
    }
    &_back {
      background-color: rgba(#fff, 0.75);
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