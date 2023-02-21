<template>
    <div>
        <h1>민형쿤 소련쿤 결혼식</h1>
        <div id="map"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            map: null,
        };
    },

    mounted() {
        if (!window.kakao || !window.kakao.maps) {
            const script = document.createElement("script");
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=148b6ba374ec3bc5322801fd52a1e52d`;

            script.addEventListener("load", () => {
                kakao.maps.load(this.initMap);
            });
            document.head.appendChild(script);
        } else {
            //console.log("이미 로딩됨: ", window.kakao);
            this.initMap();
        }
    },

    methods: {
        initMap() {
            const container = document.getElementById("map");
            const options = {
                center: new kakao.maps.LatLng(
                    37.3081468108158,
                    126.8287756218405,
                    16
                ),
                level: 5,
            };
            this.map = new kakao.maps.Map(container, options);

            this.initMaker();
        },
        initMaker() {
            // 마커가 표시 위치
            // const markerPosition = new window.kakao.maps.LatLng(
            //     37.3081468108158,
            //     126.8287756218405,
            //     16
            // );

            var imageSrc =
                    "https://user-images.githubusercontent.com/97419543/219056501-0a38eced-619f-44d2-8636-84f55d7d7e99.png", // 마커이미지의 주소입니다
                imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
                imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(
                    imageSrc,
                    imageSize,
                    imageOption
                ),
                markerPosition = new kakao.maps.LatLng(
                    37.3081468108158,
                    126.8287756218405,
                    16
                ); // 마커가 표시될 위치입니다

            // 마커 생성
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
                image: markerImage, // 마커이미지 설정
            });

            // 마커가 지도 위에 표시되도록 설정
            marker.setMap(this.map);
        },
    },
};
</script>

<style scoped>
#map {
    width: 100vw;
    height: 100vh;
}
</style>
