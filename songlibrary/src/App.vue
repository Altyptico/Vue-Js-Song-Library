<template>
  <div id="app">
    <app-requests :newSong="song" @songAdded="song = $event" ></app-requests>
    <app-search></app-search>
    <app-footer :title="title" :year="year"></app-footer>
  
  </div>
</template>

<script>

import requests from './components/requests.vue'
import footer from './components/Footer.vue'
import search from './components/search.vue'

export default {
   data() {
      return {
          song: '',
          title: 'Magnum Opus Song Library',
          year: 2021
      }
  },
  components: {
    'app-requests': requests,
    'app-search': search,
     'app-footer': footer
  },
  name: 'app',
 
}
</script>

<style>

</style>
