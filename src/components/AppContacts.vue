<template>
  <div class="contacts">
    <a class="contacts__link" v-for="item in contactData" :key="item.id" :href="item.hyperlink">
      <svg class="contacts__icon" :class="addImageModifier(item)">
        <use :xlink:href="item.icon.path + item.icon.hash"></use>
      </svg>
      <span class="contacts__caption">{{ item.text }}</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "AppContacts",
    computed: {
      contactData() {
        return this.$store.state.person.contactData;
      }
    },
    methods: {
      addImageModifier(contactData) {
        return (contactData.text === 'Telegram') ? 'contacts__icon_telegram' : '';
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";
  @import "~@/assets/sass/mixins.scss";

  .contacts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .contacts__link {
    @include focus-visible(#fff, 5px);
    @include visual-state-transition;
    display: inline-flex;
    align-items: center;
    margin: 5px 0;
    padding: 10px 12px;
    border-radius: 25px;
    color: #fff;
    text-decoration: none;
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
    @include visual-state-transition;
    width: 20px;
    height: 20px;
    fill: #fff;
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
