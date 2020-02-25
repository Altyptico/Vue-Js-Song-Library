/* eslint-disable vue/no-parsing-error */
<template>
  <div>
      <ul id="requests">
        <li><button v-on:click="toggleInput">Enter Song Selection</button></li>
        <li><input type="text" placeholder="Enter Song or Artist Name" v-show="isFieldShowing"></li>
        <li><button>Vote on Songs</button></li>
        <li><button>Bar</button></li>
      </ul>
        
  </div>
</template>

<script>
export default {
    props: {
         isFieldShowing: {
             type: Boolean,
             default: true
         }
        
    },
   data() {
          
    },
    methods: {
        toggleInput: function (){
            this.isFieldShowing = !this.isFieldShowing; //Conditionally shows the input field when "Enter Song Selection" button is clicked//

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
</style>
