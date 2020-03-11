import search from './components/search.vue';
import Vote from './components/Vote.vue';
import Suggest from './components/Suggest.vue';

export default [
    {path:'/', component: search},
    {path: '/Vote', component: Vote},
    {path: '/Suggest', component: Suggest}
  
]