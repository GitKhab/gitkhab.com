<template>
  <span class="chip">
    <svg class="chip__icon" :class="iconModifier">
      <use :xlink:href="iconPath"></use>
    </svg>
    <span class="chip__text">{{ text }}</span>
  </span>
</template>

<script>
  export default {
    name: 'AppChip',
    props: {
      iconModifier: String,
      iconPath: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";
  @import "~@/assets/sass/mixins.scss";

  .chip {
    @include visual-state-transition;
    display: inline-flex;
    padding: 10px 12px;
    border-radius: 25px;
    color: #fff;
    &:hover {
      color: $black-light;
      background-color: #fff;
      & .chip__icon {
        fill: $black-light;
      }
    }
  }

  .chip__icon {
    @include visual-state-transition;
    width: 20px;
    height: 20px;
    fill: #fff;
  }

  .chip__text {
    margin-left: 5px;
  }

</style>