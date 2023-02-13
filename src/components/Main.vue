<template>
    <div class="page_wrap">
        <!-- main_images -->
        <div class="img_wrap">
            <img class="main_img" />
        </div>

        <div class="introduce_wrap">
            <img class="background_img" />

            <div class="introduce_text_wrap">
                <span>저희 가족은 큰 보물을 얻었습니다.</span>
                <span>세상의 그 무엇과도 바꿀 수 없는</span>
                <span>사랑스러운 선호가 첫 생일을 맞았습니다.</span>
                <span>앞으로도 우리 선호가</span>
                <span>건강하고 지혜로운 아이로 자랄 수 있도록</span>
                <span>함께 축하해 주세요.</span>

                <div class="profile_wrap">
                    <div class="father_wrap">
                        <div class="user_img1"></div>
                        <div class="job">
                            아빠<span class="name">박용택</span>
                        </div>
                        <div class="gift" @click="handleCopy">축하하기🎁</div>
                    </div>
                    <div class="mother_wrap">
                        <div class="user_img2"></div>
                        <div class="job">
                            엄마<span class="name">허보미</span>
                        </div>
                        <div class="gift" @click="handleCopy2">축하하기🎁</div>
                    </div>
                </div>

                <img class="calendar" />
            </div>
        </div>

        <div class="gallery_wrap">
            <img class="gallery_img" />
            <!-- <img class="gallery_button" @click="goGallery" /> -->
        </div>

        <div class="map_wrap">
            <img class="background_img2" />
            <img class="map_img" />
        </div>

        <input
            ref="inputEl1"
            type="hidden"
            value="박용택 우리 1002-655-977533"
        />
        <input
            ref="inputEl2"
            type="hidden"
            value="허보미 국민 228001-04-182769"
        />
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "Main",
    setup() {
        const inputEl1 = ref(null);
        const inputEl2 = ref(null);

        const handleCopyForIE = () => {
            inputEl1.value.setAttribute("type", "text");
            inputEl1.value.select();
            document.execCommand("copy");
            inputEl1.value.setAttribute("type", "hidden");
            alert(
                "축하의 말씀과 함께 전해주세요! :) 클립보드에 계좌번호 복사완료!"
            );
        };

        const handleCopy = () => {
            console.log("누름");
            if (inputEl1.value === null) {
                return;
            }
            if (!navigator.clipboard) {
                handleCopyForIE();
                return;
            }
            navigator.clipboard
                .writeText(inputEl1.value.value)
                .then(() =>
                    alert(
                        "축하의 말씀과 함께 전해주세요! :) 클립보드에 계좌번호 복사완료!"
                    )
                )
                .catch((e) => {
                    console.log(e.message);
                    handleCopyForIE();
                });
        };

        const handleCopyForIE2 = () => {
            inputEl2.value.setAttribute("type", "text");
            inputEl2.value.select();
            document.execCommand("copy");
            inputEl2.value.setAttribute("type", "hidden");
            alert(
                "축하의 말씀과 함께 전해주세요! :) 클립보드에 계좌번호 복사완료!"
            );
        };

        const handleCopy2 = () => {
            console.log("누름");
            if (inputEl2.value === null) {
                return;
            }
            if (!navigator.clipboard) {
                handleCopyForIE2();
                return;
            }
            navigator.clipboard
                .writeText(inputEl2.value.value)
                .then(() =>
                    alert(
                        "축하의 말씀과 함께 전해주세요! :) 클립보드에 계좌번호 복사완료!"
                    )
                )
                .catch((e) => {
                    console.log(e.message);
                    handleCopyForIE2();
                });
        };

        return {
            inputEl1,
            inputEl2,
            handleCopy,
            handleCopy2,
        };
    },
    methods: {
        goGallery() {
            this.$router.push("/gallery");
        },
    },
};
</script>
