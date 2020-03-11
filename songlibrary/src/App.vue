<template>
  <div id="app">
    <app-requests ></app-requests>
    <router-view :newSong="song" :songLibrary="songInfo" @songAdded="song = $event" ></router-view>
    <!-- 
    <app-search :songInfo="songInfo"></app-search>
    <app-footer :title="title" :year="year"></app-footer> -->
  
  </div>
</template>

<script>

import requests from './components/requests.vue'
// import footer from './components/Footer.vue'
// import search from './components/search.vue'

export default {
   data() {
      return {
          song: '',
          title: 'Magnum Opus Song Library',
          year: 2021,
          songInfo: [
            {name: 'This Must Be The Place', artist:'Talking Heads', genre: 'Alternative/Indie', year: 1983},
            {name: 'The Way I Am', artist:'Ingrid Michaelson', genre: 'Alternative/Indie', year: 2006}
          ]
      }
  },
  components: {
    'app-requests': requests,
    // 'app-search': search,
    //  'app-footer': footer
  },
  name: 'app',
 
}
</script>

<style>

</style>
