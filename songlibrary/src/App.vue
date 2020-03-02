<template>
  <div id="app">
    <app-requests> </app-requests>
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
   
  }
}
</script>

<style>

</style>
