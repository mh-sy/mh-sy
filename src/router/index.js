import { createWebHistory, createRouter } from "vue-router";
import Main from "../components/Main.vue";
import Gallery from "../components/Gallery.vue";

const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/gallery",
        component: Gallery,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
