/* eslint-disable vue/no-parsing-error */
<template>
  <div>
      <ul id="requests">
        <li><button v-on:click="toggleInput">Enter Song Selection</button></li>
        <li><input v-model="song" v-on:keypress.enter="addSong" type="text" placeholder="Enter Song or Artist Name" v-show="isFieldShowing" ></li>
        <!-- <li><button v-on:keypresss.enter="$emit('addSong')"></button></li> -->
        <li><button>Vote on Songs</button></li>
        <li><button>Bar</button></li>
      </ul>
        <p>{{song}}</p>
  </div>
</template>

<script>
export default {
    props: {
         isFieldShowing: {                 //error message: avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Use a data or computed property based on the prop's value.//
             type: Boolean,
             default: false
         },
         song:{
             type: String,
             default: ""
         },
         songLibrary:{
            type: Array,
            default: function(){ return []}
         }
        
    },
   data() {
      
    },
    methods: {
        toggleInput: function (){
            this.isFieldShowing = !this.isFieldShowing; //Conditionally shows the input field when "Enter Song Selection" button is clicked//

        },
        addSong: function(){
                this.songLibrary.push();
                console.log(this.songLibrary);
                this.song = '';
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
    
    }
</style>
