<template>
  <div class="contacts">
    <a class="contacts__link" :href="github">
      <svg class="contacts__icon contacts__icon_github">
        <use xlink:href="@/assets/svg/sprites/fontawesome.svg#github"></use>
      </svg>
      <span class="contacts__caption">GitHub</span>
    </a>
    <a class="contacts__link" :href="telegram">
      <svg class="contacts__icon contacts__icon_telegram">
        <use xlink:href="@/assets/svg/sprites/fontawesome.svg#telegram-plane"></use>
      </svg>
      <span class="contacts__caption">Telegram</span>
    </a>
    <a class="contacts__link" :href="mailTo">
      <svg class="contacts__icon contacts__icon_mail">
        <use xlink:href="@/assets/svg/sprites/fontawesome.svg#envelope"></use>
      </svg>
      <span class="contacts__caption">{{ email }}</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "AppContacts",
    computed: {
      github() {
        return this.$store.state.person.github;
      },
      telegram() {
        return this.$store.state.person.telegram;
      },
      email() {
        return this.$store.state.person.email;
      },
      mailTo() {
        return 'mailto:' + this.$store.state.person.email;
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";
  @import "~@/assets/sass/mixins.scss";

  $transition-duration: 0.15s;

  .contacts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .contacts__link {
    @include focus-visible(#fff, 5px);
    display: inline-flex;
    align-items: center;
    margin: 5px 0;
    padding: 10px 12px;
    border-radius: 25px;
    color: #fff;
    text-decoration: none;
    transition: color $transition-duration, background-color $transition-duration;
    &:not(:first-child) {
      margin-left: 5px;
    }
    &:hover {
      color: $black-light;
      background-color: #fff;
      & .contacts__icon {
        fill: $black-light;
      }
      & .contacts__icon_telegram {
        fill: #229eD9;
      }
    }
  }

  .contacts__icon {
    width: 20px;
    height: 20px;
    fill: #fff;
    transition: fill $transition-duration;
  }

  .contacts__caption {
    margin-left: 5px;
  }

  @media screen and (min-width: 640px) {
    .contacts {
      justify-content: flex-start;
    }
  }
</style>
