<template>
  <div>
        <h3> Suggest Songs</h3>
            <form>
                  <label>Name:</label><input ><br/>
                  <label>Artist:</label><input><br/>
                  <label>Genre:</label><input><br/>
                  <label>Year:</label><input>
            </form>

      
  </div>
</template>

<script>
 

export default {
  
      props:{
        
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

input{
      padding: 10px;
      margin: 20px 0;
      border: 1px solid #222;
}
label{
          text-align: center;
        font-family:'Francois One', 'sans-serif';
}
   
</style>