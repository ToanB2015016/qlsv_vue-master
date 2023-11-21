<template>
  <!-- <DefaultLayout /> -->
  <router-view></router-view>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue';


export default {
  name: 'App',
  components: {
      DefaultLayout
  },
  setup() {
    

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none !important;
  color: inherit;
}
</style>
