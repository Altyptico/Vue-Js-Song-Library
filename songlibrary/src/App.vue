<template>
  <div id="app">
    <app-requests :newSong="song" @songAdded="song = $event"></app-requests>
  
  </div>
</template>

<script>

import requests from './components/requests.vue'

export default {
   data() {
      return {
          song: ''
      }
  },
  components: {
    'app-requests': requests
  },
  name: 'app',
 
}
</script>

<style>

</style>
