<template>
  <div id="app">
    <Food/>
    <Sport/>
    <Display/>
  </div>
</template>

<script>

import Food from './components/Food.vue'
import Sport from './components/Sport.vue'
import Display from './components/Display.vue'
import { store } from './store/store'

export default {
  name: 'App',
  store,
  components: {
    Food, Sport, Display
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
