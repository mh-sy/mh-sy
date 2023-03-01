<template>
    <div class="gift_wrap">
        <div class="gift_text total">신랑신부에게 마음 전하기</div>

        <div class="sinrang_wrap">
            <div class="gift_text"><img class="sinrang_icon" />신랑측</div>

            <div class="row_wrap">
                <div class="sero_wrap">
                    <div class="sinrang">신랑 아버지</div>
                    <div class="sinrang_button" @click="handleCopy">
                        마음 전하기
                    </div>
                </div>

                <div class="sero_wrap">
                    <div class="sinrang">신랑 강민형</div>
                    <div class="sinrang_button" @click="handleCopy2">
                        마음 전하기
                    </div>
                </div>
            </div>
        </div>

        <div class="sinbu_wrap">
            <div class="gift_text"><img class="sinbu_icon" />신부측</div>

            <div class="row_wrap">
                <div class="sero_wrap">
                    <div class="sinbu">신부 아버지</div>
                    <div class="sinrbu_button" @click="handleCopy3">
                        마음 전하기
                    </div>
                </div>

                <div class="sero_wrap">
                    <div class="sinbu">신부 최소연</div>
                    <div class="sinrbu_button" @click="handleCopy4">
                        마음 전하기
                    </div>
                </div>
            </div>
        </div>

        <input
            ref="inputEl1"
            type="hidden"
            value="강성모 기업은행 960-010964-01-011"
        />
        <input
            ref="inputEl2"
            type="hidden"
            value="강민형 신한은행 110-249-367370"
        />
        <input
            ref="inputEl3"
            type="hidden"
            value="최성열 농협 605078 -52-025503"
        />
        <input
            ref="inputEl4"
            type="hidden"
            value="최소연 기업은행 010-6210-7282"
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
        const inputEl3 = ref(null);
        const inputEl4 = ref(null);

        // 신랑 아버지
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

        // 신랑
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

        // 신부 아버지
        const handleCopyForIE3 = () => {
            inputEl3.value.setAttribute("type", "text");
            inputEl3.value.select();
            document.execCommand("copy");
            inputEl3.value.setAttribute("type", "hidden");
            alert(
                "축하의 말씀과 함께 전해주세요! :) 클립보드에 계좌번호 복사완료!"
            );
        };
        const handleCopy3 = () => {
            console.log("누름");
            if (inputEl3.value === null) {
                return;
            }
            if (!navigator.clipboard) {
                handleCopyForIE3();
                return;
            }
            navigator.clipboard
                .writeText(inputEl3.value.value)
                .then(() =>
                    alert(
                        "축하의 말씀과 함께 전해주세요! :) 클립보드에 계좌번호 복사완료!"
                    )
                )
                .catch((e) => {
                    console.log(e.message);
                    handleCopyForIE3();
                });
        };

        // 신부
        const handleCopyForIE4 = () => {
            inputEl4.value.setAttribute("type", "text");
            inputEl4.value.select();
            document.execCommand("copy");
            inputEl4.value.setAttribute("type", "hidden");
            alert(
                "축하의 말씀과 함께 전해주세요! :) 클립보드에 계좌번호 복사완료!"
            );
        };
        const handleCopy4 = () => {
            console.log("누름");
            if (inputEl4.value === null) {
                return;
            }
            if (!navigator.clipboard) {
                handleCopyForIE4();
                return;
            }
            navigator.clipboard
                .writeText(inputEl4.value.value)
                .then(() =>
                    alert(
                        "축하의 말씀과 함께 전해주세요! :) 클립보드에 계좌번호 복사완료!"
                    )
                )
                .catch((e) => {
                    console.log(e.message);
                    handleCopyForIE4();
                });
        };

        return {
            inputEl1,
            inputEl2,
            inputEl3,
            inputEl4,
            handleCopy,
            handleCopy2,
            handleCopy3,
            handleCopy4,
        };
    },
    methods: {
        goGallery() {
            this.$router.push("/gallery");
        },
    },
};
</script>

<style>
.sinrang_icon,
.sinbu_icon {
    width: 25px;
    height: 25px;
}

.sinrang_icon {
    content: url(../assets/images/sinrang.png);
    margin-right: 10px;
}

.sinbu_icon {
    content: url(../assets/images/sinbu.png);
    margin-right: 10px;
}

.gift_text {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
