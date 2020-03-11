/* eslint-disable vue/no-parsing-error */
<template>
  <nav class="request">
    <!-- <h1>Newsong:  {{newSong}}</h1> -->
      <ul id="navButtons">
        <li><router-link to="/" exact><button>Home</button></router-link></li>
        <li><router-link to="/Vote" exact><button>Vote on Songs</button></router-link></li>
        <li><router-link to="/Suggest" exact><button>Suggest a Song</button></router-link></li>
        <li><button>Search Songs</button></li>
        <li><input :value="song" @input="addSong" @keyup.enter="addNewSong" type="text" placeholder="Enter Song or Artist Name" ></li>
         
        
      </ul>
      <!-- <div class="words">{{songLibrary}}</div> -->
  </nav>
  
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

    .request{
      background-color: #b4b4b4;
      margin:0 -9999rem;
      padding: 0.25rem 9999rem;
      height: 250px;
      max-width: 100%;

    }
    ul{
       list-style-type: none; 
       padding: 25px;

    }
    li{
        padding: 20px;
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
        margin-left: -30px;
        height: 30px;
        width: 300px;
    
    }
    .words{
        display:inline;
    }
    .router-link-active button{
            background-color: #76b393;
    }
</style>