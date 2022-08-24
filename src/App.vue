<template>
    <div class="page-wrap">
        <!-- 헤더 부분 -->
        <div class="header-wrap">
            <div class="logo-text">2buy2go</div>
            <div class="btn-wrap">
                <button @click="likeDataShow()" class="btn">찜 목록</button>
                <button @click="sortDataShow()" class="btn">가격순</button>
                <button @click="originalItemDataShow()" class="btn">
                    전체보기
                </button>
            </div>
        </div>

        <!-- 아이템 리스트 부분 -->
        <div class="list-wrap">
            <div class="item-wrap" v-for="(item, idx) in itemData" :key="idx">
                <div class="item-box-wrap" @click="moveDetailPage(item)">
                    <div class="item-wrap-left">
                        <div
                            class="item-image"
                            :style="`background-image: url(${item.image})`"
                        ></div>
                    </div>

                    <div class="item-wrap-right">
                        <div class="item-line">
                            <div class="item-text">상품명</div>
                            <span class="item-content-text">{{
                                item.title
                            }}</span>
                        </div>

                        <div class="item-line">
                            <div class="item-text">가격</div>
                            <span class="item-content-text"
                                >{{ item.price.toLocaleString() }}원</span
                            >
                        </div>
                    </div>
                </div>
                <div class="like-icon-wrap">
                    <div
                        @click="clickLike(idx, item)"
                        v-if="item.like === false"
                        class="item-basket"
                    >
                        🖤
                    </div>
                    <div
                        v-if="item.like === true"
                        @click="clickLike(idx, item)"
                        class="item-basket"
                    >
                        🧡
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from "./assets/data.js";

export default {
    name: "App",
    data() {
        return {
            itemData: data,
            originalItemData: [...data],
            likeData: [],

            nowTab: 0,
        };
    },
    methods: {
        moveDetailPage(item) {
            location.href = item.url;
            // console.log(item);
        },

        clickLike(idx, item) {
            // console.log("내 인덱스는?", idx, item);
            item.like = !item.like;
        },
        likeDataShow() {
            this.itemData = this.itemData.filter((el) => el.like === true);
            this.nowTab = 2;
        },
        sortDataShow() {
            this.itemData = this.itemData.sort((a, b) =>
                a.price > b.price ? 1 : -1
            );
            this.nowTab = 1;
        },
        originalItemDataShow() {
            this.itemData = this.originalItemData;
            this.nowTab = 0;
        },
    },
};
</script>

<style></style>
