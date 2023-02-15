import { createWebHistory, createRouter } from "vue-router";
import Main from "../components/Main.vue";
import Gallery from "../components/Gallery.vue";
import KaKaoMap from "../components/KaKaoMap.vue";

const routes = [
    {
        path: "/",
        name: Main,
        component: Main,
    },
    {
        path: "/gallery",
        name: Gallery,
        component: Gallery,
    },
    {
        path: "/kakaomap",
        component: KaKaoMap,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
