<template>
  <div>
        <h3> Song Library</h3>

         <p v-for="song in songInfo" v-bind:key="song.name">{{song.name}}<br/>{{song.artist}} <br/> {{song.genre}} <br/> {{song.year}}</p>
         <!-- <p>{{}}</p> -->
       
      
  </div>
</template>

<script>
 

export default {
  
      props:{
          songInfo:{
              type: Array
          }
      },
   data() {
      return {

      }
   },
   components: {
     
   },
  
      methods: {

      }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Anton|Dosis:400,800|Francois+One|Montserrat&display=swap');

   div{
       height: 500px;

   }
   ul{
       list-style-type: none; 
       padding: 25px;

    }
   
</style>