<template>
    <div id="app">
        <div class="main_wrap">
            <img class="main_img" />

            <img class="intro_img" />

            <div class="map_wrap">
                <div class="map_text bold">Location</div>
                <div class="map_text_half_wrap">
                    <div class="map_text location">
                        경기도 안산시 단원구 광덕1로 171
                    </div>
                    <div class="map_text location">
                        AW컨벤션(안산) 6층 테라스볼룸
                    </div>

                    <div class="map_wrap_icon">
                        <div class="map_icon_wrap" @click="moveMap">
                            <img class="map_icon naver" />
                            <span>지도보기</span>
                        </div>
                        <div class="map_icon_wrap" @click="moveMap2">
                            <img class="map_icon google" />
                            <span>지도보기</span>
                        </div>
                        <div class="map_icon_wrap" @click="moveMap3">
                            <img class="map_icon daum" />
                            <span>지도보기</span>
                        </div>
                    </div>
                </div>

                <div class="kakao_wrap">
                    <KaKaoMap />
                </div>
            </div>

            <div class="gallery_wrap">
                <Gallery />
            </div>

            <Button />

            <!-- <button @click="moveMap">네이버테스트</button>
            <button @click="moveMap2">네이버테스트2</button> -->

            <!-- <router-view /> -->
            <div class="make">
                <div class="makeby">청첩장 by</div>
                <span class="dooin_songyi">망고땡스부부</span>
                <img class="doosong_img" />
            </div>
        </div>
    </div>
</template>

<script>
import KaKaoMap from "./components/KaKaoMap.vue";
import Gallery from "./components/Gallery.vue";
import Button from "./components/Button.vue";

export default {
    name: "App",
    components: {
        KaKaoMap,
        Gallery,
        Button,
    },
    methods: {
        moveMap() {
            window.open("https://naver.me/IxD7uOQW", "_blank");
        },
        moveMap2() {
            window.open("http://kko.to/EjhRvGYWkP", "_blank");
        },
        moveMap3() {
            window.open("https://goo.gl/maps/VpCFHTB7daMFd7w5A", "_blank");
        },
    },
};
</script>

<style>
#app {
    @font-face {
        font-family: "GangwonEdu_OTFBoldA";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff")
            format("woff");
        font-weight: normal;
        font-style: normal;
    }
}

.main_wrap {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    font-family: "GangwonEdu_OTFBoldA";
    font-size: 24px;
}

.main_img {
    max-width: 1080px;

    content: url(./assets/images/main_img.gif);

    border: 1px solid #c1c1c1;
}

.intro_img {
    max-width: 1080px;

    content: url(./assets/images/intro_img.jpg);

    border: 1px solid #c1c1c1;
    border-top: none;
}

.map_wrap {
    background-color: #fff6f1;

    max-width: 1080px;
    max-height: 1920px;

    font-size: 1.2rem;

    display: flex;
    flex-direction: column;
    padding: 40px;
    padding-bottom: 40px;

    border: 1px solid #c1c1c1;
    border-top: none;
}
.map_text {
    font-size: 1.2rem;

    margin-bottom: 10px;
}
.map_text.bold {
    font-size: 2.5rem;
    margin-bottom: 15px;
    text-align: center;
}

.kakao_wrap {
    border: 2px solid #eaeaea;
}

.gallery_wrap {
    background: linear-gradient(#fff6f1, #ffd0c4);

    max-width: 1080px;
    max-height: 1920px;

    font-size: 1.2rem;

    display: flex;
    flex-direction: column;
    padding: 40px;

    border: 1px solid #c1c1c1;
    border-top: none;
}

.gift_wrap {
    background-color: #fff6f1;
    background: linear-gradient(#ffd0c4, #fff6f1);

    max-width: 1080px;
    max-height: 1920px;

    font-size: 1.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 40px;

    border: 1px solid #c1c1c1;
    border-top: none;
}

.gift_text {
    font-size: 2rem;

    margin-bottom: 10px;
}
.gift_text.total {
    margin-bottom: 75px;
}

.sinrang_wrap,
.sinbu_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 75px;
}

.sinbu_wrap {
    margin-bottom: 0px;
}

.row_wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.sero_wrap {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sinrang,
.sinbu {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-bottom: 5px;
}

.sinrbu_button {
    width: 100%;
    /* height: 30px; */

    padding: 5px 0px;
    background-color: #f79e9e;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    color: #fff6f1;

    cursor: pointer;

    font-size: 0.8rem;
}

.sinrang_button {
    width: 100%;
    /* height: 30px; */

    padding: 5px 0px;
    background-color: #78c0e9;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    color: #fff6f1;

    cursor: pointer;

    font-size: 0.8rem;
}

.map_text_half_wrap {
    display: flex;
    flex-direction: column;
    width: 100%;

    text-align: center;
}

.left_wrap {
    display: flex;
    flex-direction: column;
}

.map_icon {
    width: 40px;
    height: 40px;
}

.map_icon.naver {
    content: url(./assets/images/naver_icon.png);
}

.map_icon.daum {
    content: url(./assets/images/google_icon.png);
}

.map_icon.google {
    content: url(./assets/images/daum_icon.png);
}

.right_wrap {
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
}

.map_icon_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.map_wrap_icon {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    padding: 20px 0px;
}

.make {
    width: 100%;
    height: 25px;
    font-size: 0.5rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: 1px solid #c1c1c1;
    border-top: none;
}

.dooin_songyi {
    font-size: 0.75rem;
    font-family: "UhBeeSe_hyun";
    margin-left: 3px;
    margin-right: 3px;
}

.doosong_img {
    width: 15px;
    height: 15px;
    content: url(./assets/images/make.png);
}
</style>
