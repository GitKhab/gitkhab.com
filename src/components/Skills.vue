<template>
  <section class="skills">
    <h1 class="skills__title">Навыки</h1>
    <Tabs>
      <Tab name="HTML" :selected="true">
        <div>Навыки (HTML)</div>
      </Tab>
      <Tab name="CSS">
        <div>Навыки (CSS)</div>
      </Tab>
      <Tab name="JS">
        <div>Навыки (JS)</div>
      </Tab>
      <Tab name="Прочее">
        <div>Прочие навыки</div>
      </Tab>
    </Tabs>
  </section>
</template>

<script>
  import Tabs from "@/components/Tabs";
  import Tab from "@/components/Tab";

  export default {
    name: "Skills",
    components: {Tab, Tabs},
  }
</script>

<style lang="scss">
  @import "~@/assets/sass/variables.scss";

  .skills {}

  .skills__title {
    margin: 0 0 12px 0;
    font-size: $font-size-xl;
    font-weight: 500;
  }
</style>
