import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginPage.vue";
import MainView from "../views/MainPage.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: MainView,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView,
    },
    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;