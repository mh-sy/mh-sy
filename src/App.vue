<template>
    <div id="app">
        <!-- <KaKaoMap /> -->
        <Gallery />
        <router-view />
    </div>
</template>

<script>
// import KaKaoMap from "./components/KaKaoMap.vue";
import Gallery from "./components/Gallery.vue";

export default {
    name: "App",
    components: {
        // KaKaoMap,
        Gallery,
    },
};
</script>

<style></style>
