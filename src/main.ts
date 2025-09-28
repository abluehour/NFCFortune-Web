import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiStars,GiCrystalBall,FaStar,LaStarAndCrescentSolid  } from 'oh-vue-icons/icons'

addIcons(BiStars, GiCrystalBall,FaStar,LaStarAndCrescentSolid);

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.mount('#app');

