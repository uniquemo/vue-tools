<template>
  <h3>Tools</h3>
  <ul>
    <li>
      <router-link to='/qr-code'>QR Code</router-link>
    </li>
  </ul>

  <router-view></router-view>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>
#app {
  padding: 0 1em;
  color: #2c3e50;
}
</style>
