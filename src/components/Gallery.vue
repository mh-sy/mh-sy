<template>
    <span class="top_text">Gallery</span>
    <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="false"
        v-model="currentSlide"
    >
        <Slide v-for="(slide, index) in 13" :key="index">
            <div class="carousel__item">
                <!-- {{ index + 1 }} -->
                <img class="photo" :src="imgArr[index]?.url" />
            </div>
        </Slide>
    </Carousel>

    <Carousel
        id="thumbnails"
        :items-to-show="4"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
    >
        <Slide v-for="(slide, index) in 13" :key="index">
            <div class="carousel__item" @click="slideTo(slide - 1)">
                <img class="photo" :src="imgArr[index]?.url" />
            </div>
        </Slide>
    </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "Gallery",
    components: {
        Carousel,
        Slide,
        // Navigation,
    },
    data: () => ({
        currentSlide: 0,
        imgArr: [
            {
                url: require("@/assets/images/01.jpg"),
            },
            {
                url: require("@/assets/images/02.jpg"),
            },
            {
                url: require("@/assets/images/03.jpg"),
            },
            {
                url: require("@/assets/images/04.jpg"),
            },
            {
                url: require("@/assets/images/05.jpg"),
            },
            {
                url: require("@/assets/images/06.jpg"),
            },
            {
                url: require("@/assets/images/07.jpg"),
            },
            {
                url: require("@/assets/images/08.jpg"),
            },
            {
                url: require("@/assets/images/09.jpg"),
            },
            {
                url: require("@/assets/images/10.jpg"),
            },
            {
                url: require("@/assets/images/11.jpg"),
            },
            {
                url: require("@/assets/images/12.jpg"),
            },
            {
                url: require("@/assets/images/13.jpg"),
            },
        ],
    }),
    methods: {
        slideTo(val) {
            this.currentSlide = val;
        },
    },
});
</script>

<style>
#gallery .carousel__item {
    max-height: 80%;
}

.carousel__item {
    width: 100%;
    max-height: 20%;
    /* background-color: var(--vp-c-green); */
    color: #000;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.photo {
    width: 100%;
}

.top_text {
    font-size: 2.5rem;
    margin-bottom: 15px;
    text-align: center;
}
</style>
