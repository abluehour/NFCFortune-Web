import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiStars,GiCrystalBall,FaStar  } from 'oh-vue-icons/icons'

addIcons(BiStars, GiCrystalBall,FaStar);

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.mount('#app');

