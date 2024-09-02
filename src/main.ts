import {createApp} from 'vue'
import './commentStyle.css'
import App from './App.vue'
import router from "./routes";

createApp(App).use(router).mount('#app')
