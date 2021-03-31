<template>
  <div class="contacts">
    <a class="contacts__link" v-for="item in contactData" :key="item.id" :href="item.hyperlink">
      <AppChip class="contacts__chip"
               :icon-modifier="addImageModifier(item)"
               :icon-path="item.icon.path + item.icon.hash"
               :text="item.text"/>
    </a>
  </div>
</template>

<script>
  import AppChip from '@/components/AppChip';

  export default {
    name: 'AppContacts',
    components: {AppChip},
    computed: {
      contactData() {
        return this.$store.state.person.contactData;
      }
    },
    methods: {
      addImageModifier(contactData) {
        return (contactData.text === 'Telegram') ? 'contacts__chip_telegram' : '';
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
    @include focus-visible(#fff);
    text-decoration: none;
    border-radius: 25px;
    &:not(:first-child) {
      margin-left: 5px;
    }
  }

  .contacts__chip {
    margin: 5px 0;
    &:hover .contacts__chip_telegram {
      fill: #229ed9;
    }
  }

  @media screen and (min-width: 640px) {
    .contacts {
      justify-content: flex-start;
    }
  }
</style>
