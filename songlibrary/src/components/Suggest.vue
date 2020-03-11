<template>
  <div>
        <h3> Suggest a Song</h3>
            <form>
                  <label>Name:</label><input   :value="song" @input="addSong" @keyup.enter="addNewSong" ><br/>
                  <label>Artist:</label><input :value="song" @input="addSong" @keyup.enter="addNewSong"><br/>
                  <label>Genre:</label><input  :value="song" @input="addSong" @keyup.enter="addNewSong"><br/>
                  <label>Year:</label><input  :value="song" @input="addSong" @keyup.enter="addNewSong"> <br/>
                  <button @click="addNewSong" >Submit Song</button>
            </form>

            <p>{{songInfo}}</p>
      
  </div>
</template>

<script>
 

export default {
  
       props: {
          newSong:{
              type: String,
              default: ''
          },
          songLibrary:{
              type: Array,
              default: function(){ return []}
          },
          songInfo:{
              type: Array,
              default: function(){ return []}
          }
    },
   data() {
      return {
        song: ''
      }
   },
   components: {
     
   },
  
      methods: {
            addSong(event){
           this.song = event.target.value;
           this.$emit('songAdded', this.song); //error message: avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Use a data or computed property based on the prop's value https://www.youtube.com/watch?v=PPmg7ntQjzc//

        },
            addNewSong: function(){
          this.songInfo.push(this.song);
          console.log(this.songInfo);
          return this.song = '';
        }
      }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Anton|Dosis:400,800|Francois+One|Montserrat&display=swap');

h3{
   font-family:'Francois One', 'sans-serif';
}   

input{
      padding: 10px;
      margin: 20px 0;
      border: 1px solid #222;
}
label{
      padding-right: 10px;
      text-align: center;
      font-family:'Francois One', 'sans-serif';
}
 button{

        border-color:#c6ecd9;
        color: #3b3b3b;
        padding: 10px;
        margin: 2px;
        width: 80px;
        height: 80px;
        border-radius: 100px;
        background-color: #8cd9b3; /* Green */
        text-align: center;
        font-family:'Francois One', 'sans-serif';
        font-size: 18px;
        font-weight: bold;
    }
   
</style>