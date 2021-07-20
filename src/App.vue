<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} ‒ GitKhab.com` : 'GitKhab.com';
      }
    }
  }
</script>

<style>
  #app {
    height: inherit;
  }
</style>
