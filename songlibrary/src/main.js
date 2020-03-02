import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex'
import { songs } from './components/songs';


Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  song: songs,
  render: h => h(App),
}).$mount('#app')

// export const requests = new Vuex.Requests ({
    


// })