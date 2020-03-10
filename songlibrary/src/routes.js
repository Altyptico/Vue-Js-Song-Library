import requests from './components/requests.vue';
import Vote from './components/Vote.vue';
import Suggest from './components/Suggest.vue';

export default [
    {path:'/', component: requests},
    {path: '/Vote', component: Vote},
    {path: '/Suggest', component: Suggest}
  
]