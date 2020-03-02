import Vue from 'vue';
// import App from './App.vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const song = new Vuex.Songs({
    state:{
        song: [
            {name: 'Hit me baby one more time', artist: 'Britney Spears', genre: 'Pop', year_released: 1998},
            {name: 'Loco de Amor', artist: 'David Byrne', genre: 'Worldbeat', year_released: 1989},
        ]
    }

})