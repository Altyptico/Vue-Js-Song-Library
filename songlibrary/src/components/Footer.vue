<template>
  <footer class="footer">
        <p>{{copyright}} {{year}} {{title}}</p>
  </footer>
</template>

<script>
export default {
        props:{
            title: {
                type: String
            },
            year:{
                type:  Number   
            }
        },
   data() {
      return {
          copyright: 'Copyright'
      }
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Anton|Dosis:400,800|Francois+One|Montserrat&display=swap');

    .footer{
      background-color: #b4b4b4;
      margin:0 -9999rem;
      padding: 0.25rem 9999rem;
      height: 50px;
      max-width: 100%;
      text-align: center;

    }
   
</style>