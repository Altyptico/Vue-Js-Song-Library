<template>
  <div>
         <div id="suggest">
                  <div id="container">
                             <div id="songSuggestion">
                                    <h3> Suggest a Song</h3><br/>
                                    <form v-on:submit.prevent>
                                           <label>Song Name:</label><br/><input  v-model.lazy="song" ><br/> 
                                          <label>Artist:</label><br/><input v-model.lazy="artist"  ><br/>
                                          <label>Genre:</label><br/><input  v-model.lazy="genre"  ><br/>
                                          <label>Year:</label><br/><input  v-model.lazy="year"  > <br/>
                                          <label>Additional Notes:</label><br/><textarea v-on:keydown.enter="$event.stopPropagation()" v-model.lazy="notes" type="text"></textarea><br/>
                                          <button @click="addNewSong" @keyup.tab="addNewSong" >Submit Song</button> <!--click or enter refreshes the page-->
                                    </form>
                              </div>
                              <div id="preview">
                                          <h3>Preview Submission</h3>

                                          <p>Song Name: {{song}}</p><br/>
                                          <p>Artist: {{artist}}</p><br/>
                                          <p>Genre: {{genre}}</p><br/>
                                          <p>Year: {{year}}</p><br/>
                                          <p>Additional Notes: {{notes}}</p>
                              </div>      
                                    <ul class="submissions">
                                          <li v-for="(sel, index) in suggest" v-bind:key="index"></li>
                                 </ul>
                        </div>

            </div>


      
  </div>
</template>

<script>
 

export default {
  
      //  props: {
      //     newSong:{
      //         type: String,
      //         default: ''
      //     },
//           songLibrary:{
//               type: Array,
//               default: function(){ return []}
//           }
         
//     },
   data() {
       
     return {
           suggest:[{
              song: "This Must Be The Place",
              artist: "Talking Heads",
              genre:"Alternative/Indie",
              year: 0,
              notes: "good song"
           }],
             
        songLibrary: [
            {name: 'This Must Be The Place', artist:'Talking Heads', genre: 'Alternative/Indie', year: 1983, notes:'', id:1},
            {name: 'The Way I Am', artist:'Ingrid Michaelson', genre: 'Alternative/Indie', year: 2006, id:2}
   
        ]
        
      }
   },
//    computed: {
//          addObject: function () {
//               return this.songLibrary.push(this.suggest);   
//          }
//    },
  
      methods: {
            // addSong(event){
            //       this.song = event.target.value;
            //       this.$emit('songAdded', this.song); //error message: avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Use a data or computed property based on the prop's value https://www.youtube.com/watch?v=PPmg7ntQjzc//

            // },
            addNewSong: function(){
          this.songLibrary.push([this.song, this.artist, this.genre, this.year, this.notes]);
      //      console.log(this.song, this.artist, this.genre, this.year, this.notes);
      //     console.log(this.songLibrary[0]);
          this.suggest="";
        }
      }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Anton|Dosis:400,800|Francois+One|Montserrat&display=swap');

h3, p{
   font-family:'Francois One', 'sans-serif';
}   

input, textarea{
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #222;
      width: 300px;
}
textarea{
      height: 130px;
}

label{
      padding-right: 5px;
      padding-top: 0px;
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

    #suggest{
          display: inline-flex;
 
    }
    #container{
          display: inline-flex;
          
    }
    #songSuggestion{
          float: left;
          padding: 10px;
            padding-right: 250px;
            margin-left: 40px;
    }
    #preview{
            float: right;
            padding: 20px;
            border: 1px dotted #ccc

    }
   
</style>