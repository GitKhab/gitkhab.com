module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/sass/variables.scss";
          @import "@/assets/sass/mixins.scss";
        `
      }
    }
  }
};