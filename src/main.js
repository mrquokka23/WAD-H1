import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import posts from './posts';
import './css/style.css';

createApp(App).use(posts).use(router).mount("#app");
