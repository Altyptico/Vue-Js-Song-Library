<template>
  <div id="app">
    <app-requests> </app-requests>
    <requests @update-song="update"></requests>
  </div>
</template>

<script>

import requests from './components/requests.vue'


export default {
  components: {
    'app-requests': requests
  },
  name: 'app',
  data: function (){
   
  },
  methods: {
    update(songLibrary){
        this.songLibrary = songLibrary;
    }
  }
}
</script>

<style>

</style>
