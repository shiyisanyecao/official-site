<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view/>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav.vue';
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    topNav
  }
}
</script>

<style>
#app {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
