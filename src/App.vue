<template>
  <div id="app">
    <app-main></app-main>
  </div>
</template>

<script>
import AppMain from "./layout/app-main.vue";
export default {
  name: "App",
  components: {
    AppMain,
  },
};
</script>

<style lang="scss">
@import './style/index.scss';
</style>
