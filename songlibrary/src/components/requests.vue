/* eslint-disable vue/no-parsing-error */
<template>
  <div>
    <h1>{{newSong}}</h1>
      <ul id="requests">
        <li><input :value="song" @input="addSong" type="text" placeholder="Enter Song or Artist Name" ></li>
        <li><button >Enter Song Selection</button></li> 
        <li><button>Vote on Songs</button></li>
        <li><button>Bar</button></li>
      </ul>
        <p>{{song}}</p>
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
  }
    },
   data() {
      return {
          song: ''
      }
    },

    methods: {
        addSong(event){
           this.song = event.target.value;
           this.$emit('songAdded', this.song); //error message: avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Use a data or computed property based on the prop's value https://www.youtube.com/watch?v=PPmg7ntQjzc//
           console.log(this.newSong);
        }
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Anton|Dosis:400,800|Francois+One|Montserrat&display=swap');

    ul{
       list-style-type: none; 

    }
    li{
       /* margin: 10%; */
        float: left;

    }
    button{
        display: inline-block;
        border-color:#c6ecd9;
        color: #3b3b3b;
        padding: 10px;
        margin: 2px;
        width: 120px;
        height: 120px;
        border-radius: 100px;
        background-color: #8cd9b3; /* Green */
        text-align: center;
        font-family:'Francois One', 'sans-serif';
        font-size: 18px;
        font-weight: bold;
    }
    input{
        display: inline-block;
        margin-top: 50px;
        height: 30px;
        width: 300px;
    
    }
</style>